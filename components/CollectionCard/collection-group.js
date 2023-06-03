import styles from "./collection-group.module.css";
import { Button } from "@/components/componentsindex";
import Style from "../Button/Button.module.css";

const CollectionCard = ({ row, index, onCollectionCardLargeClick }) => {
    return (
        <div
            key={"collection-" + index}
            className={styles.collectionCardLarge}
            onClick={onCollectionCardLargeClick}>
            <div className={styles.imageFramerectangle}>
                <div className={styles.images}>
                    <img
                        className={styles.image6Icon}
                        alt=""
                        src={row.images[0]}
                    />
                </div>
            </div>
            <div className={styles.text3242}>
                <div className={styles.name}>{row.title}</div>
            </div>
            <div className={styles.text32421}>
                <div className={styles.name1}>{row.price}</div>
            </div>
            <div className={styles.text32422}>
                <div className={styles.name1}>{row.price} ETH</div>
            </div>
            <div className={styles.text32423}>
                <div className={styles.name1}>{row.price} ETH Volume</div>
            </div>
        </div>
    );
};

const CollectionGroup = ({
    onCollectionCardLargeClick,

    collections,
}) => {
    return (
        <>
            {" "}
            <div
                className={Style.h2}
                style={{ display: "block", margin: "0 auto" }}>
                <h2>Most popular Collections</h2>
            </div>
            <div className={styles.collectionCardLargeParent}>
                {collections.length > 0
                    ? collections.map(
                          (row, index) =>
                              index <= 3 && (
                                  <CollectionCard
                                      row={row}
                                      key={index}
                                      onCollectionCardLargeClick={
                                          onCollectionCardLargeClick
                                      }
                                  />
                              )
                      )
                    : null}
            </div>
            <div className={Style.box}>
                <button
                    className={Style.button}
                    style={{ display: "block", margin: "0 auto" }}>
                    View Collections
                </button>
            </div>
        </>
    );
};

export default CollectionGroup;
