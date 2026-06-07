import { page } from './documents/page';
import { banner } from './objects/content/banner';
import { button } from './objects/content/button';
import { contentGrid } from './objects/content/contentGrid';
import { gallery } from './objects/content/gallery';
import { imageBlock } from './objects/content/imageBlock';
import { mediaText } from './objects/content/mediaText';
import { relatedContent } from './objects/content/relatedContent';
import { richText } from './objects/content/richText';
import { stage } from './objects/content/stage';
import { teaser } from './objects/content/teaser';
import { teaserGrid } from './objects/content/teaserGrid';
import { pageContent } from './objects/pageContent';
import { bannerConfig } from './objects/shared/bannerConfig';
import { buttonConfig } from './objects/shared/buttonConfig';
import { galleryImage } from './objects/shared/galleryImage';
import { gridColumn } from './objects/shared/gridColumn';
import { link } from './objects/shared/link';
import { manualTeaserItem } from './objects/shared/manualTeaserItem';
import { portableText } from './objects/shared/portableText';
import { referencedTeaserItem } from './objects/shared/referencedTeaserItem';

export const schemaTypes = [
    page,
    pageContent,
    portableText,
    link,
    buttonConfig,
    bannerConfig,
    galleryImage,
    manualTeaserItem,
    referencedTeaserItem,
    gridColumn,
    richText,
    imageBlock,
    mediaText,
    button,
    banner,
    stage,
    gallery,
    teaser,
    teaserGrid,
    contentGrid,
    relatedContent,
];
