function PrivacyPolicy() {
    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', color: 'var(--text-main)', lineHeight: '1.7' }}>
            <h1>Privacy Policy</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Last updated: January 2026</p>

            <section>
                <h2>1. Data Collection</h2>
                <p>
                    We do not store your personal data on our servers. Most of our tools
                    (Image Resizer, Slug Generator, and others) run entirely in your browser.
                    Any data saved (such as Hashtag sets or Schedule drafts) is stored in your
                    browser&apos;s Local Storage and never leaves your device.
                </p>
            </section>

            <section>
                <h2>2. Cookies</h2>
                <p>
                    We use cookies to improve your experience and to analyze traffic.
                    Third-party vendors, including Google, use cookies to serve ads based on
                    your prior visits to our website.
                </p>
            </section>

            <section>
                <h2>3. Advertising</h2>
                <p>
                    We use Google AdSense to serve advertisements. Google&apos;s use of
                    advertising cookies enables it and its partners to serve ads to you based
                    on your visit to this site and/or other sites on the Internet.
                </p>
            </section>

            <section>
                <h2>4. Third-Party Links</h2>
                <p>
                    Our site may contain links to other websites. We are not responsible for
                    the privacy practices of such other sites.
                </p>
            </section>

            <section>
                <h2>5. Contact</h2>
                <p>
                    If you have questions about this policy, please contact us at{' '}
                    <a href="mailto:skmudassir.it@gmail.com" style={{ color: 'var(--primary)' }}>
                        skmudassir.it@gmail.com
                    </a>
                    .
                </p>
            </section>
        </div>
    )
}

export default PrivacyPolicy
