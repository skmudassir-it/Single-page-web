function PrivacyPolicy() {
    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', color: 'var(--text-main)' }}>
            <h1>Privacy Policy</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h3>1. Data Collection</h3>
            <p>We do not store your personal data on our servers. Most of our tools (Image Resizer, Slug Generator) run entirely in your browser. Any data saved (like Hashtag sets or Schedule drafts) is stored in your browser's Local Storage.</p>

            <h3>2. Cookies</h3>
            <p>We use cookies to improve your experience and to analyze traffic. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to our website.</p>

            <h3>3. Advertising</h3>
            <p>We use Google AdSense to serve advertisements. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the Internet.</p>

            <h3>4. Third-Party Links</h3>
            <p>Our site may contain links to other websites. We are not responsible for the privacy practices of such other sites.</p>

            <h3>5. Contact</h3>
            <p>If you have questions about this policy, please contact us.</p>
        </div>
    )
}

export default PrivacyPolicy
