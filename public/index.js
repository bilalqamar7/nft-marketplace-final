import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import SearchCard from "../components/search-card";
import CollectionGroup from "../components/collection-group";
import NFTNameFilter from "../components/n-f-t-name-filter";
import PhotographyContainer from "../components/photography-container";
import NFTMarketplaceContainer from "../components/n-f-t-marketplace-container";
import styles from "./index.module.css";
const HomePage = () => {
  const router = useRouter();

  const onTITLEContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onARTAlleyImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onCategiruesMenuClick = useCallback(() => {
    router.push("/search");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/profile-your-collections");
  }, [router]);

  const onCollectionCardLargeClick = useCallback(() => {
    router.push("/collection-all");
  }, [router]);

  const onCollectionCardLarge1Click = useCallback(() => {
    router.push("/collection-all");
  }, [router]);

  const onCollectionCardLarge2Click = useCallback(() => {
    router.push("/collection-all");
  }, [router]);

  const onCollectionCardLarge3Click = useCallback(() => {
    router.push("/collection-all");
  }, [router]);

  const onARTAlleyImage1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.homepage}>
      <SearchCard
        dimensionText="/art-alley8@2x.png"
        wheelDimensionText="/vector6.svg"
        tireDimensionText="/component-47.svg"
        searchCardNavBarsWidth="1423px"
        navBaarWidth="unset"
        navBaarAlignSelf="stretch"
        tITLEBoxSizing="border-box"
        tITLEWidth="374px"
        aRTAlleyWidth="unset"
        aRTAlleyAlignSelf="stretch"
        aRTAlleyMaxWidth="100%"
        aRTAlleyOverflow="hidden"
        aRTAlleyFlexShrink="0"
        categiruesMenuHeight="unset"
        onTITLEContainerClick={onTITLEContainerClick}
        onARTAlleyImageClick={onARTAlleyImageClick}
        onCategiruesMenuClick={onCategiruesMenuClick}
        onFrameContainerClick={onFrameContainerClick}
      />
      <div className={styles.monsterStacked}>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
        <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        <div className={styles.monsterStackedChild} />
        <div className={styles.monsterStackedItem} />
      </div>
      <label className={styles.headingBar}>
        <div className={styles.headingBarWrapper}>
          <div className={styles.headingBar1}>
            <div className={styles.headingBar2}>Top Collections</div>
          </div>
        </div>
      </label>
      <CollectionGroup
        imageIds="/image-67@2x.png"
        imageIds150x150="/image-94@2x.png"
        imageIds150x150x="/image-37@2x.png"
        imageIds150x150x124173595="/image-24@2x.png"
        onCollectionCardLargeClick={onCollectionCardLargeClick}
        onCollectionCardLarge1Click={onCollectionCardLarge1Click}
        onCollectionCardLarge2Click={onCollectionCardLarge2Click}
        onCollectionCardLarge3Click={onCollectionCardLarge3Click}
      />
      <div className={styles.moreBar}>
        <Button
          className={styles.iconFrames}
          variant="contained"
          color="primary"
        >
          Button
        </Button>
      </div>
      <div className={styles.headingBar3}>
        <div className={styles.headingBarWrapper}>
          <div className={styles.headingBar1}>
            <div className={styles.headingBar2}>Top NFTs</div>
          </div>
        </div>
      </div>
      <NFTNameFilter
        imageIds="/image-38@2x.png"
        imageIds2="/image-38@2x.png"
        imageIds3="/image-38@2x.png"
        imageIds4="/image-38@2x.png"
        imageIds5="/image-38@2x.png"
        imageIds6="/image-38@2x.png"
      />
      <div className={styles.headingBar6}>
        <div className={styles.headingBarFrame}>
          <div className={styles.headingBar7}>
            <div className={styles.headingBar2}>Categories</div>
          </div>
        </div>
      </div>
      <PhotographyContainer />
      <NFTMarketplaceContainer
        dimensionsText="/socials10.svg"
        dimensionsText2="/art-alley9@2x.png"
        onARTAlleyImage1Click={onARTAlleyImage1Click}
      />
    </div>
  );
};

export default HomePage;
