import { SEO } from "../../components/SEO";

export function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background text-foreground py-20 px-6">
            <SEO title="Privacy Policy" description="Privacy Policy for Hamza Latif's portfolio." />
            <div className="max-w-2xl mx-auto space-y-8">
                <h1 className="text-3xl font-bold">Privacy Policy</h1>
                <p>Your privacy is important to us.</p>

                <section>
                    <h2 className="text-xl font-semibold mb-2">Data Collection</h2>
                    <p className="text-muted-foreground">This website uses the Instagram Basic Display API to display images from the owner's Instagram profile. We do not collect, store, or share any personal data from visitors.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">Instagram Data</h2>
                    <p className="text-muted-foreground">The Instagram data accessed (images and captions) is read-only and used solely for display purposes on this portfolio. No user data is saved to our servers.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">Contact</h2>
                    <p className="text-muted-foreground">For any questions regarding this policy, please contact Hamza Latif.</p>
                </section>

                <p className="text-sm text-muted-foreground mt-8">Last Updated: February 2026</p>
            </div>
        </div>
    );
}
