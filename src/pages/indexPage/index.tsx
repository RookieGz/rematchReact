import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./index.less";
import drink from "assets/drink.webp";

function IndexPage({ index, dispatch }) {
  return (
    <div className={styles.indexpage}>
      <img src={drink} />
      {/* <img src={img.imgUrl} /> */}
      <h1>{index.welcome}</h1>
      <div>
        <i>{index.num}</i>&nbsp;
        <button
          onClick={() =>
            dispatch({ type: "index/updata", payload: { num: index.num + 1 } })
          }
        >
          +
        </button>
      </div>
      <Link to="/img">Img</Link>
      <br />
      <Link to="/imgSecond">Img Seconds</Link>
    </div>
  );
}

const mapStateToProps = ({ index, img }) => ({ index, img });

export default connect(mapStateToProps)(IndexPage);
