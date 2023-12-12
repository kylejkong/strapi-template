import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogFeaturedPost extends Schema.Component {
  collectionName: 'components_blog_featured_posts';
  info: {
    displayName: 'FeaturedPost';
    icon: 'calendar';
  };
  attributes: {
    FeaturedPostHeading: Attribute.String;
    Post: Attribute.Relation<
      'blog.featured-post',
      'oneToOne',
      'api::post.post'
    >;
  };
}

export interface BlogPostSelection extends Schema.Component {
  collectionName: 'components_blog_post_selections';
  info: {
    displayName: 'PostSelection';
    description: '';
  };
  attributes: {
    Tags: Attribute.Relation<
      'blog.post-selection',
      'oneToMany',
      'api::tag.tag'
    >;
    SelectionHeading: Attribute.String;
  };
}

export interface LayoutButton extends Schema.Component {
  collectionName: 'components_layout_buttons';
  info: {
    displayName: 'Button';
    icon: 'seed';
  };
  attributes: {
    Label: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'HeroSection';
    icon: 'alien';
  };
  attributes: {
    Images: Attribute.Media & Attribute.Required;
    CallToAction: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    Buttons: Attribute.Component<'layout.button', true>;
  };
}

export interface SeoSeoInfo extends Schema.Component {
  collectionName: 'components_seo_seo_infos';
  info: {
    displayName: 'SeoInfo';
  };
  attributes: {
    SeoTitle: Attribute.String;
    SeoDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.featured-post': BlogFeaturedPost;
      'blog.post-selection': BlogPostSelection;
      'layout.button': LayoutButton;
      'layout.hero-section': LayoutHeroSection;
      'seo.seo-info': SeoSeoInfo;
    }
  }
}
