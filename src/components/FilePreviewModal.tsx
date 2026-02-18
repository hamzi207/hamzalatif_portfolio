import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink } from "lucide-react";
import { useEffect } from "react";

interface FilePreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    fileUrl: string | null;
    title?: string;
    allowDownload?: boolean;
}

export function FilePreviewModal({
    isOpen,
    onClose,
    fileUrl,
    title = "Document Preview",
    allowDownload = true
}: FilePreviewModalProps) {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen || !fileUrl) return null;

    // Append toolbar=0 to PDF URLs to hide the viewer toolbar if it's a PDF
    const displayUrl = fileUrl;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-5xl h-[85vh] bg-card border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card/50 backdrop-blur">
                            <h3 className="text-lg font-medium text-foreground truncate max-w-[80%]">
                                {title}
                            </h3>
                            <div className="flex items-center gap-2">
                                {allowDownload && (
                                    <a
                                        href={fileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary/50 transition-colors"
                                        title="Open in new tab"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}
                                <button
                                    onClick={onClose}
                                    className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary/50 transition-colors"
                                    aria-label="Close preview"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Content (PDF Viewer) */}
                        <div className="flex-1 bg-white w-full h-full relative overflow-hidden">
                            <object
                                data={displayUrl}
                                type="application/pdf"
                                className="w-full h-full"
                            >
                                <iframe
                                    src={displayUrl}
                                    className="w-full h-full border-0"
                                    title={title}
                                >
                                    <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-4">
                                        <p className="text-muted-foreground">This browser doesn't support PDF previews.</p>
                                        {allowDownload ? (
                                            <a
                                                href={fileUrl}
                                                download
                                                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                                            >
                                                Download to View
                                            </a>
                                        ) : (
                                            <p className="text-sm text-muted-foreground italic">Previews are restricted on this device.</p>
                                        )}
                                    </div>
                                </iframe>
                            </object>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
