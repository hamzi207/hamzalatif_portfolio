import { useState, useEffect } from "react";
import { Instagram, Loader2, Image as ImageIcon } from "lucide-react";

interface InstagramPost {
    id: string;
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
    media_url: string;
    thumbnail_url?: string;
    permalink: string;
    caption?: string;
}

const PLACEHOLDERS = [
    { id: "p1", gradient: "from-indigo-500/20 to-purple-500/20", icon: Instagram },
    { id: "p2", gradient: "from-emerald-500/20 to-teal-500/20", icon: ImageIcon },
    { id: "p3", gradient: "from-blue-500/20 to-cyan-500/20", icon: ImageIcon },
    { id: "p4", gradient: "from-purple-500/20 to-pink-500/20", icon: Instagram },
    { id: "p5", gradient: "from-orange-500/20 to-red-500/20", icon: ImageIcon },
];

export function InstagramFeed() {
    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchInstagram() {
            try {
                // Fetching from our own backend API endpoint. 
                // This keeps the token secure and automatically relies on the refreshed token.
                const response = await fetch('/api/instagram/feed');

                if (!response.ok) throw new Error("Failed to fetch");

                const data = await response.json();
                setPosts(data.data || []);
            } catch (err) {
                console.error("Instagram fetch error:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchInstagram();
    }, []);

    return (
        <section className="py-20 px-6 lg:px-8 border-t border-border/50">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                            <img src="/assets/instagram_color.svg" alt="Instagram" className="w-6 h-6" />
                            Life & Interests
                        </h2>
                        <p className="text-muted-foreground text-sm">
                            Snapshots from my journey.
                        </p>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-12">
                        <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {(posts.length > 0 ? posts : PLACEHOLDERS).map((item) => {
                            const isPost = "media_url" in item;
                            if (isPost) {
                                const post = item as InstagramPost;
                                const imageUrl = post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url;
                                return (
                                    <div key={post.id} className="aspect-[4/5] relative group overflow-hidden rounded-lg bg-card border border-border">
                                        {imageUrl ? (
                                            <img
                                                src={imageUrl}
                                                alt={post.caption || "Instagram Post"}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                        ) : <div className="w-full h-full bg-muted" />}
                                    </div>
                                );
                            } else {
                                const placeholder = item as typeof PLACEHOLDERS[0];
                                return (
                                    <div key={placeholder.id} className={`aspect-[4/5] rounded-lg bg-gradient-to-br ${placeholder.gradient} flex items-center justify-center`}>
                                        <placeholder.icon className="w-8 h-8 text-white/40" />
                                    </div>
                                );
                            }
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
