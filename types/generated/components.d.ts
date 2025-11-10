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
    requireConsent: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    submitLabel: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Submit'>;
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
    button: Schema.Attribute.Component<'shared.cta-button', false>;
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

export interface HomePageComponentsAiDeviceCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_ai_device_cards';
  info: {
    displayName: 'AI Device Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    percentage: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageComponentsAiPoweredCard
  extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_ai_powered_cards';
  info: {
    displayName: 'AI Powered Card';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface HomePageComponentsAwardWiningCard
  extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_award_wining_cards';
  info: {
    displayName: 'Award Wining Card';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface HomePageComponentsBuildAiCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_build_ai_cards';
  info: {
    displayName: 'Build Ai Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    workflowImages: Schema.Attribute.Media<'images', true>;
  };
}

export interface HomePageComponentsCircularProgress
  extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_circular_progresses';
  info: {
    displayName: 'Circular Progress';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    percent: Schema.Attribute.Integer;
  };
}

export interface HomePageComponentsFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_feature_cards';
  info: {
    displayName: 'Feature Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface HomePageComponentsFeatureChipCard
  extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_feature_chip_cards';
  info: {
    displayName: 'Feature Chip Card';
  };
  attributes: {
    chips: Schema.Attribute.Component<'shared.avatar', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomePageComponentsGadgetCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_gadget_cards';
  info: {
    displayName: 'Gadget Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
  };
}

export interface HomePageComponentsHowItWorkCard
  extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_how_it_work_cards';
  info: {
    displayName: 'How It Work Card';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface HomePageComponentsInsightCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_insight_cards';
  info: {
    displayName: 'Insight Card';
  };
  attributes: {
    avatars: Schema.Attribute.Component<'shared.avatar', true>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface HomePageComponentsKpiBalance extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_kpi_balances';
  info: {
    displayName: 'KPI Balance';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface HomePageComponentsPartnerItem extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_partner_items';
  info: {
    displayName: 'Partner Item';
  };
  attributes: {
    darkLogo: Schema.Attribute.Media<'images'>;
    lightLogo: Schema.Attribute.Media<'images'>;
  };
}

export interface HomePageComponentsPremiumAccess
  extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_premium_accesses';
  info: {
    displayName: 'Premium Access';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.cta-button', false>;
    currencySuffix: Schema.Attribute.String;
    priceMax: Schema.Attribute.String;
    priceMin: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageComponentsSavedCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_saved_cards';
  info: {
    displayName: 'Saved Card';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.cta-button', false>;
    percentage: Schema.Attribute.Integer;
    price: Schema.Attribute.String;
  };
}

export interface HomePageComponentsTrackCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_track_cards';
  info: {
    displayName: 'Track Card';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface HomePageBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_banner_sections';
  info: {
    displayName: 'Banner Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#000'>;
    backgroundImage: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
  };
}

export interface HomePageBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_blog_sections';
  info: {
    displayName: 'Blog Section';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    button: Schema.Attribute.Component<'shared.cta-button', false>;
    description: Schema.Attribute.String;
    featureArticle: Schema.Attribute.Relation<
      'oneToOne',
      'api::article.article'
    >;
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
    clarityCard: Schema.Attribute.Component<
      'home-page-components.feature-chip-card',
      false
    >;
    featureCard: Schema.Attribute.Component<'shared.card', false>;
    proveCard: Schema.Attribute.Component<
      'home-page-components.feature-chip-card',
      false
    >;
    sectionTag: Schema.Attribute.String;
    title: Schema.Attribute.String;
    workflowCard: Schema.Attribute.Component<
      'home-page-components.build-ai-card',
      false
    >;
  };
}

export interface HomePageGadgetSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_gadget_sections';
  info: {
    displayName: 'Gadget Section';
  };
  attributes: {
    aiDevice: Schema.Attribute.Component<
      'home-page-components.ai-device-card',
      false
    >;
    aiPowered: Schema.Attribute.Component<
      'home-page-components.ai-powered-card',
      false
    >;
    awardWining: Schema.Attribute.Component<
      'home-page-components.award-wining-card',
      false
    >;
    gadet: Schema.Attribute.Component<
      'home-page-components.gadget-card',
      false
    >;
    insight: Schema.Attribute.Component<
      'home-page-components.insight-card',
      false
    >;
    kpi: Schema.Attribute.Component<'home-page-components.kpi-balance', false>;
    premiumAccess: Schema.Attribute.Component<
      'home-page-components.premium-access',
      false
    >;
    progress: Schema.Attribute.Component<
      'home-page-components.circular-progress',
      false
    >;
    saved: Schema.Attribute.Component<'home-page-components.saved-card', false>;
    title: Schema.Attribute.String;
    track: Schema.Attribute.Component<'home-page-components.track-card', false>;
  };
}

export interface HomePageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    bannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.cta-button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.cta-button', false>;
    title: Schema.Attribute.String;
  };
}

export interface HomePageHowItWorkSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_how_it_work_sections';
  info: {
    displayName: 'How It Work Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.cta-button', false>;
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<
      'home-page-components.how-it-work-card',
      true
    >;
    sectionTag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageIntegrationSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_integration_sections';
  info: {
    displayName: 'Integration Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    button: Schema.Attribute.Component<'shared.cta-button', false>;
    desciption: Schema.Attribute.Text;
    sectionTag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePagePartnerSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_partner_sections';
  info: {
    displayName: 'Partner Section';
  };
  attributes: {
    partners: Schema.Attribute.Component<
      'home-page-components.partner-item',
      true
    >;
  };
}

export interface HomePageTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    reviews: Schema.Attribute.Relation<'oneToMany', 'api::review.review'>;
    sectionTag: Schema.Attribute.String;
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

export interface LegalPageInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_legal_page_info_cards';
  info: {
    displayName: 'info-card';
  };
  attributes: {
    icon: Schema.Attribute.Component<'shared.icon', false>;
    info: Schema.Attribute.String;
    label: Schema.Attribute.String;
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

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
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
    type: Schema.Attribute.Enumeration<['primary', 'secondary', 'white']>;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'Faq Item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface SharedGetStarted extends Struct.ComponentSchema {
  collectionName: 'components_shared_get_starteds';
  info: {
    displayName: 'Get Started';
  };
  attributes: {
    badges: Schema.Attribute.Component<'shared.text', true>;
    button: Schema.Attribute.Component<'shared.cta-button', false>;
    description: Schema.Attribute.String;
    tag: Schema.Attribute.String;
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
    get: Schema.Attribute.Component<'shared.get-started', false>;
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
      'home-page-components.ai-device-card': HomePageComponentsAiDeviceCard;
      'home-page-components.ai-powered-card': HomePageComponentsAiPoweredCard;
      'home-page-components.award-wining-card': HomePageComponentsAwardWiningCard;
      'home-page-components.build-ai-card': HomePageComponentsBuildAiCard;
      'home-page-components.circular-progress': HomePageComponentsCircularProgress;
      'home-page-components.feature-card': HomePageComponentsFeatureCard;
      'home-page-components.feature-chip-card': HomePageComponentsFeatureChipCard;
      'home-page-components.gadget-card': HomePageComponentsGadgetCard;
      'home-page-components.how-it-work-card': HomePageComponentsHowItWorkCard;
      'home-page-components.insight-card': HomePageComponentsInsightCard;
      'home-page-components.kpi-balance': HomePageComponentsKpiBalance;
      'home-page-components.partner-item': HomePageComponentsPartnerItem;
      'home-page-components.premium-access': HomePageComponentsPremiumAccess;
      'home-page-components.saved-card': HomePageComponentsSavedCard;
      'home-page-components.track-card': HomePageComponentsTrackCard;
      'home-page.banner-section': HomePageBannerSection;
      'home-page.blog-section': HomePageBlogSection;
      'home-page.faq-section': HomePageFaqSection;
      'home-page.feature-section': HomePageFeatureSection;
      'home-page.gadget-section': HomePageGadgetSection;
      'home-page.hero-section': HomePageHeroSection;
      'home-page.how-it-work-section': HomePageHowItWorkSection;
      'home-page.integration-section': HomePageIntegrationSection;
      'home-page.partner-section': HomePagePartnerSection;
      'home-page.testimonial-section': HomePageTestimonialSection;
      'legal-page.hero': LegalPageHero;
      'legal-page.info-card': LegalPageInfoCard;
      'legal-page.section': LegalPageSection;
      'shared.avatar': SharedAvatar;
      'shared.card': SharedCard;
      'shared.cta-button': SharedCtaButton;
      'shared.faq-item': SharedFaqItem;
      'shared.get-started': SharedGetStarted;
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
