import type { Schema, Struct } from '@strapi/strapi';

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
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
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
      'shared.avatar': SharedAvatar;
      'shared.cta-button': SharedCtaButton;
      'shared.faq-item': SharedFaqItem;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
