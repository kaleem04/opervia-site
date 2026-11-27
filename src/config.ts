// Single place to edit business details. Everything on the site reads from here.
export const SITE = {
  name: 'Opervia',
  tagline: 'Never miss a lead again.',
  description:
    'Opervia sets up AI call answering, instant text-back, and lead follow-up for HVAC, plumbing, roofing, and electrical companies.',
 // phone: '(555) 010-0142',
  //phoneHref: '+15550100142',
  email: 'kaleem.ullah@opervia.host',
  // Point this at Formspree, Netlify Forms, Basin, or your own endpoint.
  formAction: 'https://formspree.io/f/your-form-id',
};

export const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const CTA = { label: 'Get a free missed-call audit', href: '/contact' };
