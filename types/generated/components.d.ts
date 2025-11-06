import type { Schema, Struct } from '@strapi/strapi';

export interface AboutPageAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_about_page_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    description: Schema.Attribute.String;
    features: Schema.Attribute.Component<'about-page.feature', true>;
    mainImage: Schema.Attribute.Media<'images'>;
    overlayImage: Schema.Attribute.Media<'images'>;
    sectionTag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutPageExperienceSection extends Struct.ComponentSchema {
  collectionName: 'components_about_page_experience_sections';
  info: {
    displayName: 'Experience Section';
  };
  attributes: {
    description: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'about-page.experience-stat', true>;
    title: Schema.Attribute.String;
  };
}

export interface AboutPageExperienceStat extends Struct.ComponentSchema {
  collectionName: 'components_about_page_experience_stats';
  info: {
    displayName: 'Experience Stat';
  };
  attributes: {
    color: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
  };
}

export interface AboutPageFeature extends Struct.ComponentSchema {
  collectionName: 'components_about_page_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface AboutPageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_about_page_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    description: Schema.Attribute.String;
    leftBottomImage: Schema.Attribute.Media<'images'>;
    leftTopImage: Schema.Attribute.Media<'images'>;
    rightImage: Schema.Attribute.Media<'images'>;
    sectionTag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutPageMissionSection extends Struct.ComponentSchema {
  collectionName: 'components_about_page_mission_sections';
  info: {
    displayName: 'Mission Section';
  };
  attributes: {
    description: Schema.Attribute.String;
    mission: Schema.Attribute.Component<'about-page.section-card', false>;
    sectionTag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutPageReviewSection extends Struct.ComponentSchema {
  collectionName: 'components_about_page_review_sections';
  info: {
    displayName: 'Review Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.cta-button', false>;
    description: Schema.Attribute.Text;
    reviews: Schema.Attribute.Relation<'oneToMany', 'api::review.review'>;
    sectionTag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutPageSectionCard extends Struct.ComponentSchema {
  collectionName: 'components_about_page_section_cards';
  info: {
    displayName: 'Mission Card';
  };
  attributes: {
    bottomAvatars: Schema.Attribute.Media<'images', true>;
    bottomCardRole: Schema.Attribute.String;
    bottomCardTitle: Schema.Attribute.String;
    mainCardTitle: Schema.Attribute.String;
    progressImage: Schema.Attribute.Media<'images'>;
    progressTitle: Schema.Attribute.String;
    timeLabel: Schema.Attribute.String;
    userAvatar: Schema.Attribute.Media<'images'>;
    userName: Schema.Attribute.String;
    userRole: Schema.Attribute.String;
  };
}

export interface ContactPageBadge extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_badges';
  info: {
    displayName: 'badge';
  };
  attributes: {
    icon: Schema.Attribute.Component<'shared.icon', true>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactPageContactForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_contact_forms';
  info: {
    displayName: 'contact-form';
  };
  attributes: {
    emailLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Email address'>;
    emailPlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter your email'>;
    emailRequired: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    messageLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Write message'>;
    messagePlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter your messages'>;
    messageRequired: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    nameLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Your name'>;
    namePlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter your name'>;
    nameRequired: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    phoneLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Your number'>;
    phonePlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter your number'>;
    phoneRequired: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    settings: Schema.Attribute.Component<'contact-page.form-settings', false>;
    twoColumnTop: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ContactPageFormSettings extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_form_settings';
  info: {
    displayName: 'form-settings';
  };
  attributes: {
    consentTextPrefix: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'I agree with the'>;
    enableRecaptcha: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    errorMessage: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Something went wrong. Please try again.'>;
    requireConsent: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    submitLabel: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Submit'>;
    successMessage: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Thanks! We\u2019ll get back to you soon.'>;
    termsLink: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface ContactPageGetInTouch extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_get_in_touches';
  info: {
    displayName: 'get-in-touch';
  };
  attributes: {
    badge: Schema.Attribute.Component<'contact-page.badge', true>;
    buttonLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Contact us'>;
    description: Schema.Attribute.Text;
    pillLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Get started'>;
    placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter your email'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Get in touch'>;
  };
}

export interface ContactPageHero extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    headline: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    pageTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    supportingText: Schema.Attribute.Text;
  };
}

export interface ContactPageInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_info_cards';
  info: {
    displayName: 'info-card';
  };
  attributes: {
    accentImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    linkUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
    value: Schema.Attribute.Text;
    valueType: Schema.Attribute.Enumeration<
      ['address', 'email', 'phone', 'text']
    > &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface HomePageComponentsFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_feature_cards';
  info: {
    displayName: 'Feature Card';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.cta-button', false>;
    description: Schema.Attribute.Text;
    featureItems: Schema.Attribute.Component<
      'home-page-components.feature-item',
      true
    >;
    image: Schema.Attribute.Media<'images'>;
    sectionTag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageComponentsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_feature_items';
  info: {
    displayName: 'Feature Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface HomePageComponentsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_service_cards';
  info: {
    displayName: 'Service Card';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.cta-button', false>;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    image: Schema.Attribute.Media<'images'>;
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface HomePageComponentsTimelineCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_timeline_cards';
  info: {
    displayName: 'Timeline Card';
  };
  attributes: {
    events: Schema.Attribute.Component<
      'home-page-components.timeline-group',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomePageComponentsTimelineGroup
  extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_timeline_groups';
  info: {
    displayName: 'Timeline Group';
  };
  attributes: {
    content: Schema.Attribute.Text;
    year: Schema.Attribute.String;
  };
}

export interface HomePageBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_blog_sections';
  info: {
    displayName: 'Blog Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.cta-button', false>;
    description: Schema.Attribute.String;
    sectionTag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_faq_sections';
  info: {
    displayName: 'Faq Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    faqs: Schema.Attribute.Component<'shared.faq-item', true>;
    sectionTag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_feature_sections';
  info: {
    displayName: 'Feature Section';
  };
  attributes: {
    features: Schema.Attribute.Component<
      'home-page-components.feature-card',
      true
    >;
  };
}

export interface HomePageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    leftImage1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    leftImage2: Schema.Attribute.Media<'images'>;
    leftImage3: Schema.Attribute.Media<'images'>;
    leftImage4: Schema.Attribute.Media<'images'>;
    partnerLogos: Schema.Attribute.Media<'images', true>;
    primaryButton: Schema.Attribute.Component<'shared.cta-button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.cta-button', false>;
    sectionTag: Schema.Attribute.String;
    title: Schema.Attribute.String;
    trustedByMainText: Schema.Attribute.String;
    trustedBySubText: Schema.Attribute.String;
    trustedUsers: Schema.Attribute.Component<'shared.avatar', true>;
  };
}

export interface HomePageHowItWorkSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_how_it_work_sections';
  info: {
    displayName: 'How It Work Section';
  };
  attributes: {
    features: Schema.Attribute.Component<
      'home-page-components.feature-card',
      true
    >;
    sectionTag: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageReviewSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_review_sections';
  info: {
    displayName: 'Review Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.cta-button', false>;
    reviews: Schema.Attribute.Relation<'oneToMany', 'api::review.review'>;
    sectionTag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_service_sections';
  info: {
    displayName: 'Service Section';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'shared.cta-button', false>;
    description: Schema.Attribute.Text;
    featuredServices: Schema.Attribute.Component<
      'home-page-components.service-card',
      true
    >;
    sectionTag: Schema.Attribute.String;
    services: Schema.Attribute.Component<
      'home-page-components.service-card',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomePageTimelineSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_timeline_sections';
  info: {
    displayName: 'Timeline Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    sectionTag: Schema.Attribute.String;
    timelineRange: Schema.Attribute.String;
    timelines: Schema.Attribute.Component<
      'home-page-components.timeline-card',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface LegalPageHero extends Struct.ComponentSchema {
  collectionName: 'components_legal_page_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    pageTitle: Schema.Attribute.String;
    sectionId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'privacy-hero'>;
  };
}

export interface LegalPageSection extends Struct.ComponentSchema {
  collectionName: 'components_legal_page_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    body: Schema.Attribute.Component<'shared.text', true>;
    btnLabel: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

export interface SharedAvatar extends Struct.ComponentSchema {
  collectionName: 'components_shared_avatars';
  info: {
    displayName: 'Avatar';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface SharedCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_buttons';
  info: {
    displayName: 'CTA Button';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'Faq Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_icons';
  info: {
    displayName: 'icon';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    info: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedText extends Struct.ComponentSchema {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-page.about-section': AboutPageAboutSection;
      'about-page.experience-section': AboutPageExperienceSection;
      'about-page.experience-stat': AboutPageExperienceStat;
      'about-page.feature': AboutPageFeature;
      'about-page.hero-section': AboutPageHeroSection;
      'about-page.mission-section': AboutPageMissionSection;
      'about-page.review-section': AboutPageReviewSection;
      'about-page.section-card': AboutPageSectionCard;
      'contact-page.badge': ContactPageBadge;
      'contact-page.contact-form': ContactPageContactForm;
      'contact-page.form-settings': ContactPageFormSettings;
      'contact-page.get-in-touch': ContactPageGetInTouch;
      'contact-page.hero': ContactPageHero;
      'contact-page.info-card': ContactPageInfoCard;
      'home-page-components.feature-card': HomePageComponentsFeatureCard;
      'home-page-components.feature-item': HomePageComponentsFeatureItem;
      'home-page-components.service-card': HomePageComponentsServiceCard;
      'home-page-components.timeline-card': HomePageComponentsTimelineCard;
      'home-page-components.timeline-group': HomePageComponentsTimelineGroup;
      'home-page.blog-section': HomePageBlogSection;
      'home-page.faq-section': HomePageFaqSection;
      'home-page.feature-section': HomePageFeatureSection;
      'home-page.hero-section': HomePageHeroSection;
      'home-page.how-it-work-section': HomePageHowItWorkSection;
      'home-page.review-section': HomePageReviewSection;
      'home-page.service-section': HomePageServiceSection;
      'home-page.timeline-section': HomePageTimelineSection;
      'legal-page.hero': LegalPageHero;
      'legal-page.section': LegalPageSection;
      'shared.avatar': SharedAvatar;
      'shared.cta-button': SharedCtaButton;
      'shared.faq-item': SharedFaqItem;
      'shared.icon': SharedIcon;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.text': SharedText;
    }
  }
}
