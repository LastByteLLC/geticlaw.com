// ============================================================
// Config — single source of truth for all reusable values
// ============================================================
export const config = {
  appName: 'iClaw',
  companyName: 'Last Byte LLC',
  email: 'hello@last-byte.org',
  githubRepo: 'LastByteLLC/iClaw',
  githubUrl: 'https://github.com/LastByteLLC/iClaw',
  appStoreUrl: '#',   // TODO: replace with real App Store link
  dmgUrl: '#',        // TODO: replace with real DMG download link
  siteUrl: 'https://geticlaw.com',
} as const;

// Helpers to build HTML links from config
const emailLink = `<a href="mailto:${config.email}">${config.email}</a>`;
const githubLink = `<a href="${config.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub repository</a>`;

// ============================================================
// Copy — all user-facing strings
// ============================================================
export const copy = {
  site: {
    name: config.appName,
    tagline: 'Your private AI assistant for Mac.',
    description:
      `${config.appName} is a free, open-source AI assistant powered by Apple Foundation Models. Fully on-device. No cloud. No subscription.`,
    copyright: `\u00A9 ${new Date().getFullYear()} ${config.companyName}. All rights reserved.`,
    url: config.siteUrl,
  },

  nav: {
    links: [
      { label: 'Features', href: '/features' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },

  home: {
    menubar: {
      appMenuItems: ['File', 'Edit', 'View', 'Window', 'Help'],
    },

    chat: {
      messages: [
        {
          role: 'assistant' as const,
          text: `Hey! I\u2019m ${config.appName} \u2014 your private AI assistant. I run entirely on your Mac using Apple Foundation Models.`,
        },
        {
          role: 'assistant' as const,
          text: 'No cloud. No subscriptions. No data leaves your device.',
        },
      ],
      suggestions: [
        {
          label: 'Get on the App Store',
          href: config.appStoreUrl,
          icon: '\uF179',
        },
        {
          label: 'Download DMG',
          href: config.dmgUrl,
          icon: '\u2B07',
        },
        {
          label: 'Learn More',
          href: '/features',
          icon: '\u2139',
        },
      ],
    },

    hero: {
      headline: 'AI that lives on your Mac.',
      subheadline:
        'Powered by Apple Foundation Models. Private by design. Free forever.',
    },

    features: [
      {
        title: 'Fully On-Device',
        description:
          `Every conversation stays on your Mac. ${config.appName} uses Apple Foundation Models \u2014 no internet required.`,
      },
      {
        title: 'Menubar & Dock',
        description:
          'Launch from the menubar for quick tasks or the dock for longer sessions. Always one click away.',
      },
      {
        title: 'Private by Design',
        description:
          'Zero telemetry by default. Optional anonymous crash reports only if you opt in.',
      },
      {
        title: 'Free & Open Source',
        description:
          'AGPL 3.0 licensed. Inspect the code, contribute, or build your own features.',
      },
    ],

    cta: {
      headline: `Ready to try ${config.appName}?`,
      subheadline: 'Available for macOS 26 and later.',
      primaryButton: 'Download on the Mac App Store',
      primaryHref: config.appStoreUrl,
      secondaryButton: 'Download DMG',
      secondaryHref: config.dmgUrl,
    },
  },

  features: {
    headline: `What ${config.appName} can do`,
    subheadline: 'A focused AI assistant that respects your privacy.',
    items: [
      {
        title: 'Natural Conversations',
        description:
          'Chat naturally with a powerful on-device language model. Get help with writing, brainstorming, summarizing, and more.',
      },
      {
        title: 'Menubar Quick Access',
        description:
          'Click the menubar icon and start typing. Get answers without leaving what you\u2019re working on.',
      },
      {
        title: 'Dock Mode',
        description:
          `Open ${config.appName} as a full window for longer sessions, research, and multi-turn conversations.`,
      },
      {
        title: 'Apple Foundation Models',
        description:
          'Built on Apple\u2019s on-device AI. Runs natively on Apple Silicon with zero cloud dependency.',
      },
      {
        title: 'No Account Required',
        description:
          'No sign-up, no login, no subscription. Download and start using it immediately.',
      },
      {
        title: 'Open Source',
        description:
          'Fully transparent. Read the source, verify the privacy claims, and contribute improvements.',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'March 23, 2026',
    intro:
      `${config.appName} is designed with privacy as a core principle. This policy explains what data we collect and how we handle it.`,
    sections: [
      {
        heading: 'Data Processing',
        content:
          'All AI processing happens entirely on your device using Apple Foundation Models. No conversations, prompts, or responses are ever sent to any server. We have no access to your conversations.',
        legal:
          `${config.companyName} ("we," "us," or "our") does not collect, transmit, store, or process any user-generated content, including but not limited to text prompts, conversational inputs, AI-generated responses, or any derivative data thereof. All natural language processing is performed exclusively on the end user's device via Apple Foundation Models, a framework provided by Apple Inc. We have no technical capability to access, intercept, or retrieve any such content. No server-side inference, logging, or telemetry of conversational data occurs at any point during the operation of the Software.`,
      },
      {
        heading: 'Crash Reports',
        content:
          `If you opt in, ${config.appName} may send anonymous crash reports to help us improve the app. These reports contain technical information about the crash (stack traces, OS version, device model) but never include conversation content or personally identifiable information. You can opt out at any time in Settings.`,
        legal:
          'The Software includes an optional crash reporting mechanism that, upon receiving explicit affirmative consent from the user, may transmit diagnostic data to our servers in the event of an application failure. Such diagnostic data is limited to: (a) stack trace information; (b) operating system version identifier; (c) device model identifier; and (d) application version identifier. Crash reports are stripped of all personally identifiable information ("PII") prior to transmission and do not contain any conversational content, user-generated text, file contents, or data that could reasonably be used to identify a natural person. Consent for crash reporting may be granted or revoked at any time through the application\'s Settings interface. Revocation of consent shall take effect immediately and prospectively; previously transmitted crash reports will be retained in accordance with Section "Data Retention" below.',
      },
      {
        heading: 'User Feedback',
        content:
          'If you choose to send us feedback through the app, we collect only the message you write. Feedback is anonymous \u2014 no account, email, or device identifier is attached unless you voluntarily include it in your message.',
        legal:
          `The Software provides a voluntary feedback mechanism through which users may submit free-text messages to ${config.companyName}. Feedback submissions are initiated solely by the user and require an affirmative action to transmit. We collect only the text content of the feedback message as composed by the user. No device identifiers, IP addresses, account credentials, email addresses, or other PII are automatically appended to or associated with feedback submissions. If a user voluntarily includes personally identifiable information within the body of their feedback message, such information will be received and stored by us; however, we do not solicit or require such disclosure. Feedback data is used exclusively for the purpose of improving the Software and is not sold, licensed, or otherwise made available to any third party.`,
      },
      {
        heading: 'No Analytics or Tracking',
        content:
          `${config.appName} does not include any analytics SDKs, advertising frameworks, or tracking pixels. We do not track how you use the app.`,
        legal:
          'The Software does not incorporate any third-party analytics software development kits (SDKs), advertising frameworks, attribution services, tracking pixels, web beacons, fingerprinting mechanisms, or similar technologies. We do not collect or process data regarding application usage patterns, session duration, feature utilization, user interface interactions, or behavioral metrics of any kind. No unique device identifiers, advertising identifiers (e.g., IDFA), or persistent tracking tokens are generated, stored, or transmitted by the Software.',
      },
      {
        heading: 'Data Storage',
        content:
          `Crash reports and feedback messages are stored on Cloudflare\u2019s infrastructure. They contain no personally identifiable information and are used solely to improve ${config.appName}.`,
        legal:
          'Data collected pursuant to the crash reporting and user feedback mechanisms described above is stored on infrastructure provided by Cloudflare, Inc. ("Cloudflare"), a third-party infrastructure provider. Data is stored in Cloudflare D1, a serverless SQLite-compatible database service. All stored data is limited to the specific fields enumerated in the respective sections above and contains no PII. Data is encrypted in transit using TLS 1.2 or higher. We retain crash reports and feedback submissions for a period not to exceed twenty-four (24) months from the date of receipt, after which they are permanently deleted. We reserve the right to delete collected data at any time and for any reason.',
      },
      {
        heading: 'Third Parties',
        content:
          'We do not share any data with third parties. The only external service used is Cloudflare for hosting and data storage.',
        legal:
          'We do not sell, rent, lease, trade, or otherwise disclose any collected data to third parties for any purpose, including but not limited to marketing, advertising, data brokerage, or analytics. The sole third-party service provider engaged in connection with data storage is Cloudflare, Inc., which acts as a data processor on our behalf. Cloudflare\'s processing of data is governed by their privacy policy and data processing agreements. We do not transfer data to any other third-party service providers, government entities, or affiliated organizations, except as may be required by applicable law, regulation, or valid legal process.',
      },
      {
        heading: 'Children\u2019s Privacy',
        content:
          `${config.appName} is not directed at children under 13. We do not knowingly collect any data from children.`,
        legal:
          'The Software is not directed to, and is not intended for use by, children under the age of thirteen (13), or under the applicable age of digital consent in the user\'s jurisdiction. We do not knowingly collect personal information from children. Given that the Software collects no PII in the ordinary course of operation, compliance with the Children\'s Online Privacy Protection Act (COPPA) and similar regulations is achieved by design. If we become aware that data has been inadvertently collected from a child under the applicable age threshold, we will take prompt steps to delete such data.',
      },
      {
        heading: 'Changes to This Policy',
        content:
          'We may update this policy from time to time. Changes will be posted on this page with an updated date.',
        legal:
          'We reserve the right to modify this Privacy Policy at any time at our sole discretion. Any changes will be effective immediately upon posting of the revised Privacy Policy on this page, with an updated "Last updated" date. Your continued use of the Software after the posting of a revised Privacy Policy constitutes your acceptance of such changes. We encourage you to review this Privacy Policy periodically. Material changes that substantially affect user rights or data practices will be communicated through the application or on our website prior to taking effect.',
      },
      {
        heading: 'Contact',
        content:
          `If you have questions about this privacy policy, email us at ${emailLink}, open an issue on our ${githubLink}, or send feedback through the app.`,
        legal:
          `For questions, concerns, or requests regarding this Privacy Policy or our data practices, you may contact ${config.companyName} by email at ${emailLink}, by opening an issue on our public ${githubLink}, or by submitting feedback through the application's built-in feedback mechanism. We will make commercially reasonable efforts to respond to all legitimate inquiries within thirty (30) days.`,
      },
    ],
  },

  terms: {
    title: 'Terms of Service',
    lastUpdated: 'March 23, 2026',
    intro:
      `By using ${config.appName}, you agree to the following terms.`,
    sections: [
      {
        heading: 'License',
        content:
          `${config.appName} is free, open-source software licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). You may use, modify, and distribute the software in accordance with the license terms.`,
        legal:
          'The Software is made available under the terms of the GNU Affero General Public License, Version 3.0 ("AGPL-3.0"), a copy of which is included with the Software and is available at https://www.gnu.org/licenses/agpl-3.0.html. Subject to the terms and conditions of the AGPL-3.0, you are granted a non-exclusive, worldwide, royalty-free license to use, copy, modify, and distribute the Software. If you modify the Software and make it available over a network, you must make the complete corresponding source code available under the AGPL-3.0. These Terms of Service are supplementary to, and do not replace, the AGPL-3.0. In the event of any conflict between these Terms and the AGPL-3.0, the AGPL-3.0 shall govern with respect to the licensing of the source code.',
      },
      {
        heading: 'Use at Your Own Risk',
        content:
          `${config.appName} is provided "as is" without warranty of any kind. AI-generated responses may be inaccurate, incomplete, or inappropriate. You are responsible for how you use the output.`,
        legal:
          `THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. ${config.companyName.toUpperCase()} DOES NOT WARRANT THAT THE SOFTWARE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. THE SOFTWARE UTILIZES ON-DEVICE ARTIFICIAL INTELLIGENCE MODELS PROVIDED BY APPLE INC. ("APPLE FOUNDATION MODELS") TO GENERATE RESPONSES. AI-GENERATED OUTPUT MAY BE INACCURATE, INCOMPLETE, MISLEADING, BIASED, OR OTHERWISE UNSUITABLE FOR ANY PARTICULAR PURPOSE. YOU ACKNOWLEDGE AND AGREE THAT: (A) AI-GENERATED CONTENT DOES NOT CONSTITUTE PROFESSIONAL ADVICE OF ANY KIND, INCLUDING BUT NOT LIMITED TO LEGAL, MEDICAL, FINANCIAL, OR TECHNICAL ADVICE; (B) YOU ARE SOLELY RESPONSIBLE FOR EVALUATING THE ACCURACY AND SUITABILITY OF ANY AI-GENERATED OUTPUT; AND (C) YOU ASSUME ALL RISK ARISING FROM YOUR RELIANCE ON OR USE OF AI-GENERATED CONTENT. ${config.companyName.toUpperCase()} MAKES NO REPRESENTATIONS OR WARRANTIES REGARDING THE ACCURACY, RELIABILITY, OR COMPLETENESS OF ANY AI-GENERATED OUTPUT.`,
      },
      {
        heading: 'System Requirements',
        content:
          `${config.appName} requires macOS 26 or later and a Mac with Apple Silicon. The app relies on Apple Foundation Models, which must be available on your device.`,
        legal:
          `The Software requires macOS version 26 or later and a Mac computer equipped with Apple Silicon (M1 or later). The Software depends on Apple Foundation Models, a system-level framework provided by Apple Inc., which must be installed and available on the user's device. ${config.companyName} is not responsible for the availability, performance, accuracy, or continued support of Apple Foundation Models by Apple Inc. Changes to the macOS operating system or Apple Foundation Models by Apple Inc. may affect the functionality of the Software. ${config.companyName} makes no guarantee of compatibility with future operating system versions or hardware configurations.`,
      },
      {
        heading: 'Data and Privacy',
        content:
          `Your use of ${config.appName} is also governed by our Privacy Policy. All AI processing happens on your device. We collect only anonymous crash reports (with your consent) and voluntary feedback.`,
        legal:
          'Your use of the Software is subject to our Privacy Policy, which is incorporated into these Terms by reference. By using the Software, you acknowledge that you have read, understood, and agree to be bound by the Privacy Policy. As described in the Privacy Policy, the Software processes all AI-related data exclusively on your device. The only data transmitted from your device consists of: (a) anonymous crash reports, transmitted only with your explicit opt-in consent; and (b) voluntary feedback messages, transmitted only upon your affirmative action. You represent and warrant that any feedback you submit does not contain confidential information belonging to third parties or information that you are prohibited from disclosing.',
      },
      {
        heading: 'Intellectual Property',
        content:
          `${config.appName} is copyright \u00A9 ${config.companyName}. The ${config.appName} name and logo are trademarks of ${config.companyName}. The source code is licensed under AGPL-3.0.`,
        legal:
          `The Software, including its source code, object code, documentation, visual design, user interface elements, and all associated intellectual property, is copyright \u00A9 ${config.companyName}. All rights not expressly granted under the AGPL-3.0 are reserved. The "${config.appName}" name, the ${config.appName} logo, and associated trade dress are trademarks or registered trademarks of ${config.companyName}. Nothing in the AGPL-3.0 or these Terms grants you any right to use the trademarks of ${config.companyName}, except as necessary for reasonable and customary use in describing the origin of the Software. You may not use the ${config.appName} name, logo, or trademarks in any manner that suggests endorsement by or affiliation with ${config.companyName} without prior written consent.`,
      },
      {
        heading: 'Limitation of Liability',
        content:
          `To the fullest extent permitted by law, ${config.companyName} shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of ${config.appName}.`,
        legal:
          `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ${config.companyName.toUpperCase()}, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AFFILIATES, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH: (A) YOUR USE OF OR INABILITY TO USE THE SOFTWARE; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY IN CONNECTION WITH THE SOFTWARE; (C) ANY AI-GENERATED CONTENT OR OUTPUT PRODUCED BY THE SOFTWARE; (D) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR DATA; OR (E) ANY OTHER MATTER RELATING TO THE SOFTWARE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, EVEN IF ${config.companyName.toUpperCase()} HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN JURISDICTIONS THAT DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, ${config.companyName.toUpperCase()}'S LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW. IN NO EVENT SHALL ${config.companyName.toUpperCase()}'S TOTAL AGGREGATE LIABILITY EXCEED FIFTY UNITED STATES DOLLARS (USD $50.00).`,
      },
      {
        heading: 'Indemnification',
        content:
          `You agree to indemnify ${config.companyName} against claims arising from your misuse of the Software.`,
        legal:
          `You agree to indemnify, defend, and hold harmless ${config.companyName}, its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or in connection with: (a) your use or misuse of the Software; (b) your violation of these Terms; (c) your violation of any applicable law, rule, or regulation; or (d) your violation of any rights of a third party. ${config.companyName} reserves the right, at its own expense, to assume the exclusive defense and control of any matter subject to indemnification by you, and you agree to cooperate with our defense of such claims.`,
      },
      {
        heading: 'Governing Law',
        content:
          'These terms are governed by the laws of the State of Florida, United States.',
        legal:
          'These Terms shall be governed by and construed in accordance with the laws of the State of Florida, United States of America, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in the State of Florida, and you hereby consent to the personal jurisdiction and venue of such courts. Notwithstanding the foregoing, nothing in these Terms shall limit the rights of users under mandatory consumer protection laws of their jurisdiction of residence, to the extent such laws are applicable and cannot be waived by contract.',
      },
      {
        heading: 'Severability',
        content:
          'If any provision of these terms is found unenforceable, the remaining provisions continue in effect.',
        legal:
          `If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid, legal, and enforceable, or if such modification is not possible, such provision shall be severed from these Terms, and the remaining provisions shall continue in full force and effect. The failure of ${config.companyName} to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.`,
      },
      {
        heading: 'Changes to Terms',
        content:
          `We may update these terms from time to time. Continued use of ${config.appName} constitutes acceptance of the updated terms.`,
        legal:
          `${config.companyName} reserves the right to modify these Terms at any time at its sole discretion. Any changes will be effective immediately upon posting of the revised Terms on this page, with an updated "Last updated" date. Your continued use of the Software after the posting of revised Terms constitutes your binding acceptance of such changes. If you do not agree to the revised Terms, you must discontinue use of the Software. Material changes that substantially affect your rights or obligations will be communicated through the application or on our website prior to taking effect.`,
      },
    ],
  },

  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What macOS version do I need?',
        answer:
          `${config.appName} requires macOS 26+ running on Apple Silicon. It uses Apple Foundation Models, available starting with macOS 26.`,
      },
      {
        question: `Is ${config.appName} really free?`,
        answer:
          'Yes. iClaw is completely free and open source. There are no subscriptions, API keys, or cloud AI providers.',
      },
      {
        question: `Does ${config.appName} send my data to the cloud?`,
        answer:
          'No. All AI processing happens on your device. The only data that we collect from your Mac is anonymous crash reports (if you opt in) and feedback messages (if you explicitly send them).',
      },
      {
        question: `How do I launch ${config.appName}?`,
        answer:
          `${config.appName} can run as a menubar icon for quick access or as a dock app for full-screen sessions. You can configure your preferred mode in Settings.`,
      },
      {
        question: `Will ${config.appName} be available on iOS?`,
        answer:
          `An iOS version is in development. ${config.appName} is currently available for Mac only.`,
      },
      {
        question: 'Where can I report bugs or request features?',
        answer:
          `You can email us at ${emailLink}, open an issue on our ${githubLink}, or send feedback directly through the app.`,
      },
      {
        question: `Can I contribute to ${config.appName}?`,
        answer:
          `Absolutely! ${config.appName} is open source. Check out the ${githubLink} to get started.`,
      },
    ],
  },
} as const;

export type Copy = typeof copy;
export type Config = typeof config;
