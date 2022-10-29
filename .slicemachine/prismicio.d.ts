// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Homepage documents */
interface HomepageDocumentData {
    /**
     * Title field in *Homepage*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Enter page title
     * - **API ID Path**: homepage.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Slice Zone field in *Homepage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = HeroSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for MainMenu documents */
interface MainmenuDocumentData {
    /**
     * Title field in *MainMenu*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: mainmenu.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Logo field in *MainMenu*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: mainmenu.logo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * LargeButtonText field in *MainMenu*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: mainmenu.largebuttontext
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    largebuttontext: prismicT.KeyTextField;
    /**
     * LargeButtonLink field in *MainMenu*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: mainmenu.largebuttonlink
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    largebuttonlink: prismicT.LinkField;
    /**
     * Slice Zone field in *MainMenu*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: mainmenu.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<MainmenuDocumentDataSlicesSlice>;
}
/**
 * Slice for *MainMenu → Slice Zone*
 *
 */
type MainmenuDocumentDataSlicesSlice = MainMenuItemSlice;
/**
 * MainMenu document from Prismic
 *
 * - **API ID**: `mainmenu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MainmenuDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<MainmenuDocumentData>, "mainmenu", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Title field in *Page*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Enter page title
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
}
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = HomepageDocument | MainmenuDocument | PageDocument;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
    /**
     * HeadingText field in *Hero → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.headingtext
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    headingtext: prismicT.KeyTextField;
    /**
     * HeadingColorText field in *Hero → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.headingcolortext
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    headingcolortext: prismicT.KeyTextField;
    /**
     * Image field in *Hero → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * ImageToolTip field in *Hero → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.imagetooltip
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    imagetooltip: prismicT.KeyTextField;
    /**
     * ImagePosition field in *Hero → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: hero.primary.imageposition
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    imageposition: prismicT.BooleanField;
}
/**
 * Item in Hero → Items
 *
 */
export interface HeroSliceDefaultItem {
    /**
     * ButtonText field in *Hero → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.items[].buttontext
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    buttontext: prismicT.KeyTextField;
    /**
     * ButtonLink field in *Hero → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.items[].buttonlink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    buttonlink: prismicT.LinkField;
    /**
     * ButtonType field in *Hero → Items*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.items[].buttontype
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    buttontype: prismicT.SelectField<"Primary" | "Secondary" | "Accent" | "Ghost">;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroSliceDefaultPrimary>, Simplify<HeroSliceDefaultItem>>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismicT.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in MainMenuItem → Primary
 *
 */
interface MainMenuItemSliceDefaultPrimary {
    /**
     * LinkText field in *MainMenuItem → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: main_menu_item.primary.linktext
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    linktext: prismicT.KeyTextField;
    /**
     * LinkTarget field in *MainMenuItem → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: main_menu_item.primary.linktarget
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    linktarget: prismicT.LinkField;
}
/**
 * Default variation for MainMenuItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: `MainMenuItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MainMenuItemSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<MainMenuItemSliceDefaultPrimary>, never>;
/**
 * Primary content in MainMenuItem → Primary
 *
 */
interface MainMenuItemSliceMainMenuItemWithDropdownPrimary {
    /**
     * ButtonText field in *MainMenuItem → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: main_menu_item.primary.buttontext
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    buttontext: prismicT.KeyTextField;
}
/**
 * Item in MainMenuItem → Items
 *
 */
export interface MainMenuItemSliceMainMenuItemWithDropdownItem {
    /**
     * LinkText field in *MainMenuItem → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: main_menu_item.items[].linktext
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    linktext: prismicT.KeyTextField;
    /**
     * LinkTarget field in *MainMenuItem → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: main_menu_item.items[].linktarget
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    linktarget: prismicT.LinkField;
}
/**
 * MainMenuItem - With Dropdown variation for MainMenuItem Slice
 *
 * - **API ID**: `mainMenuItemWithDropdown`
 * - **Description**: `MainMenuItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MainMenuItemSliceMainMenuItemWithDropdown = prismicT.SharedSliceVariation<"mainMenuItemWithDropdown", Simplify<MainMenuItemSliceMainMenuItemWithDropdownPrimary>, Simplify<MainMenuItemSliceMainMenuItemWithDropdownItem>>;
/**
 * Slice variation for *MainMenuItem*
 *
 */
type MainMenuItemSliceVariation = MainMenuItemSliceDefault | MainMenuItemSliceMainMenuItemWithDropdown;
/**
 * MainMenuItem Shared Slice
 *
 * - **API ID**: `main_menu_item`
 * - **Description**: `MainMenuItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MainMenuItemSlice = prismicT.SharedSlice<"main_menu_item", MainMenuItemSliceVariation>;
/**
 * Primary content in Spotlight → Primary
 *
 */
interface SpotlightSliceDefaultPrimary {
    /**
     * Image field in *Spotlight → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: spotlight.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * ImageToolTip field in *Spotlight → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: spotlight.primary.imagetooltip
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    imagetooltip: prismicT.KeyTextField;
    /**
     * ImageLocation field in *Spotlight → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: spotlight.primary.imagelocation
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    imagelocation: prismicT.BooleanField;
    /**
     * Heading field in *Spotlight → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: spotlight.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heading: prismicT.TitleField;
    /**
     * FirstContentSection field in *Spotlight → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Enter content about the spotlight
     * - **API ID Path**: spotlight.primary.firstcontentsection
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    firstcontentsection: prismicT.RichTextField;
    /**
     * SecondContentSection field in *Spotlight → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Enter more description here
     * - **API ID Path**: spotlight.primary.secondcontentsection
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    secondcontentsection: prismicT.RichTextField;
}
/**
 * Item in Spotlight → Items
 *
 */
export interface SpotlightSliceDefaultItem {
    /**
     * Item Text field in *Spotlight → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: spotlight.items[].itemtext
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    itemtext: prismicT.KeyTextField;
    /**
     * Icon field in *Spotlight → Items*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **API ID Path**: spotlight.items[].icon
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    icon: prismicT.SelectField<"Award" | "Check" | "Medal" | "Star" | "Swimmer">;
    /**
     * Item Tooltip field in *Spotlight → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: spotlight.items[].itemtooltip
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    itemtooltip: prismicT.KeyTextField;
}
/**
 * Default variation for Spotlight Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Spotlight`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SpotlightSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SpotlightSliceDefaultPrimary>, Simplify<SpotlightSliceDefaultItem>>;
/**
 * Slice variation for *Spotlight*
 *
 */
type SpotlightSliceVariation = SpotlightSliceDefault;
/**
 * Spotlight Shared Slice
 *
 * - **API ID**: `spotlight`
 * - **Description**: `Spotlight`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SpotlightSlice = prismicT.SharedSlice<"spotlight", SpotlightSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomepageDocumentData, HomepageDocumentDataSlicesSlice, HomepageDocument, MainmenuDocumentData, MainmenuDocumentDataSlicesSlice, MainmenuDocument, PageDocumentData, PageDocument, AllDocumentTypes, HeroSliceDefaultPrimary, HeroSliceDefaultItem, HeroSliceDefault, HeroSliceVariation, HeroSlice, MainMenuItemSliceDefaultPrimary, MainMenuItemSliceDefault, MainMenuItemSliceMainMenuItemWithDropdownPrimary, MainMenuItemSliceMainMenuItemWithDropdownItem, MainMenuItemSliceMainMenuItemWithDropdown, MainMenuItemSliceVariation, MainMenuItemSlice, SpotlightSliceDefaultPrimary, SpotlightSliceDefaultItem, SpotlightSliceDefault, SpotlightSliceVariation, SpotlightSlice };
    }
}
