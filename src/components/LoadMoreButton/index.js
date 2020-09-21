import React from "react";

import { ComicCover } from "./styles";

function ReadMoreButton({ fill, backgroundColor, width, height, ...props }) {
  return (
    <ComicCover {...props}>
      <svg
        width={width || "268"}
        height={height || "96"}
        viewBox={`0 0 268 96`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 36.181C0 32.0959 3.0779 28.6669 7.13935 28.2275L259.139 0.958803C263.871 0.446834 268 4.15345 268 8.91237V87.5C268 91.9183 264.418 95.5 260 95.5H7.99999C3.58172 95.5 0 91.9183 0 87.5V36.181Z"
          fill={backgroundColor || "white"}
        />
        <path
          d="M54.04 66C53.8267 66 53.6347 65.9253 53.464 65.776C53.3147 65.6053 53.24 65.4133 53.24 65.2V44.4C53.24 44.1653 53.3147 43.9733 53.464 43.824C53.6347 43.6747 53.8267 43.6 54.04 43.6H58.264C58.4987 43.6 58.6907 43.6747 58.84 43.824C58.9893 43.9733 59.064 44.1653 59.064 44.4V61.168H68.76C68.9947 61.168 69.1867 61.2533 69.336 61.424C69.4853 61.5733 69.56 61.7653 69.56 62V65.2C69.56 65.4133 69.4853 65.6053 69.336 65.776C69.1867 65.9253 68.9947 66 68.76 66H54.04ZM79.6975 66.32C77.0522 66.32 75.0148 65.6907 73.5855 64.432C72.1562 63.1733 71.3775 61.4027 71.2495 59.12C71.2282 58.8427 71.2175 58.3627 71.2175 57.68C71.2175 56.9973 71.2282 56.5173 71.2495 56.24C71.3775 53.9787 72.1775 52.2187 73.6495 50.96C75.1215 49.68 77.1375 49.04 79.6975 49.04C82.2788 49.04 84.3055 49.68 85.7775 50.96C87.2495 52.2187 88.0495 53.9787 88.1775 56.24C88.1988 56.5173 88.2095 56.9973 88.2095 57.68C88.2095 58.3627 88.1988 58.8427 88.1775 59.12C88.0495 61.4027 87.2708 63.1733 85.8415 64.432C84.4122 65.6907 82.3642 66.32 79.6975 66.32ZM79.6975 62.416C80.6362 62.416 81.3295 62.1387 81.7775 61.584C82.2255 61.008 82.4815 60.1333 82.5455 58.96C82.5668 58.7467 82.5775 58.32 82.5775 57.68C82.5775 57.04 82.5668 56.6133 82.5455 56.4C82.4815 55.248 82.2148 54.384 81.7455 53.808C81.2975 53.232 80.6148 52.944 79.6975 52.944C77.9268 52.944 76.9882 54.096 76.8815 56.4L76.8495 57.68L76.8815 58.96C76.9242 60.1333 77.1695 61.008 77.6175 61.584C78.0868 62.1387 78.7802 62.416 79.6975 62.416ZM96.38 66.32C95.2493 66.32 94.2147 66.1067 93.276 65.68C92.3587 65.232 91.6333 64.6347 91.1 63.888C90.588 63.12 90.332 62.2773 90.332 61.36C90.332 59.888 90.9293 58.704 92.124 57.808C93.34 56.912 95.004 56.2933 97.116 55.952L101.116 55.344V54.896C101.116 54.0853 100.945 53.488 100.604 53.104C100.263 52.72 99.6867 52.528 98.876 52.528C98.3853 52.528 97.98 52.6133 97.66 52.784C97.34 52.9547 97.0093 53.1893 96.668 53.488C96.3693 53.744 96.1453 53.9147 95.996 54C95.932 54.1707 95.8147 54.256 95.644 54.256H92.156C91.9427 54.256 91.7613 54.192 91.612 54.064C91.484 53.9147 91.4307 53.744 91.452 53.552C91.4733 52.976 91.7507 52.336 92.284 51.632C92.8387 50.928 93.6707 50.32 94.78 49.808C95.9107 49.296 97.2973 49.04 98.94 49.04C101.564 49.04 103.505 49.6267 104.764 50.8C106.023 51.952 106.652 53.5093 106.652 55.472V65.2C106.652 65.4133 106.577 65.6053 106.428 65.776C106.279 65.9253 106.087 66 105.852 66H102.14C101.927 66 101.735 65.9253 101.564 65.776C101.415 65.6053 101.34 65.4133 101.34 65.2V64.08C100.871 64.7413 100.209 65.2853 99.356 65.712C98.524 66.1173 97.532 66.32 96.38 66.32ZM97.884 62.672C98.8653 62.672 99.6547 62.352 100.252 61.712C100.871 61.072 101.18 60.1333 101.18 58.896V58.448L98.46 58.928C96.54 59.2693 95.58 59.9413 95.58 60.944C95.58 61.4773 95.804 61.904 96.252 62.224C96.7 62.5227 97.244 62.672 97.884 62.672ZM116.471 66.32C114.38 66.32 112.748 65.6693 111.575 64.368C110.423 63.0453 109.794 61.1893 109.687 58.8L109.655 57.68L109.687 56.528C109.772 54.224 110.402 52.4 111.575 51.056C112.77 49.712 114.402 49.04 116.471 49.04C118.412 49.04 119.98 49.6693 121.175 50.928V44.08C121.175 43.8453 121.25 43.6533 121.399 43.504C121.548 43.3547 121.74 43.28 121.975 43.28H125.879C126.114 43.28 126.306 43.3547 126.455 43.504C126.604 43.6533 126.679 43.8453 126.679 44.08V65.2C126.679 65.4133 126.604 65.6053 126.455 65.776C126.306 65.9253 126.114 66 125.879 66H122.263C122.05 66 121.858 65.9253 121.687 65.776C121.538 65.6053 121.463 65.4133 121.463 65.2V64.176C120.29 65.6053 118.626 66.32 116.471 66.32ZM118.231 62.032C119.191 62.032 119.906 61.7333 120.375 61.136C120.844 60.5173 121.111 59.728 121.175 58.768C121.196 58.4907 121.207 58.0853 121.207 57.552C121.207 57.04 121.196 56.6453 121.175 56.368C121.132 55.4933 120.866 54.768 120.375 54.192C119.884 53.616 119.17 53.328 118.231 53.328C117.228 53.328 116.503 53.6267 116.055 54.224C115.628 54.8213 115.383 55.6427 115.319 56.688C115.298 56.9013 115.287 57.232 115.287 57.68C115.287 58.128 115.298 58.4587 115.319 58.672C115.383 59.7173 115.628 60.5387 116.055 61.136C116.503 61.7333 117.228 62.032 118.231 62.032ZM138.063 66C137.828 66 137.636 65.9253 137.487 65.776C137.338 65.6267 137.263 65.4347 137.263 65.2V50.16C137.263 49.9253 137.338 49.7333 137.487 49.584C137.636 49.4347 137.828 49.36 138.063 49.36H141.551C141.786 49.36 141.978 49.4347 142.127 49.584C142.276 49.7333 142.351 49.9253 142.351 50.16V51.248C142.842 50.608 143.492 50.0853 144.303 49.68C145.135 49.2533 146.063 49.04 147.087 49.04C149.434 49.04 151.055 49.9573 151.951 51.792C152.463 50.9813 153.178 50.32 154.095 49.808C155.012 49.296 155.994 49.04 157.039 49.04C158.788 49.04 160.207 49.6373 161.295 50.832C162.404 52.0053 162.959 53.7653 162.959 56.112V65.2C162.959 65.4133 162.884 65.6053 162.735 65.776C162.586 65.9253 162.394 66 162.159 66H158.447C158.212 66 158.01 65.9253 157.839 65.776C157.69 65.6267 157.615 65.4347 157.615 65.2V56.336C157.615 55.2693 157.391 54.5013 156.943 54.032C156.516 53.5627 155.93 53.328 155.183 53.328C154.5 53.328 153.935 53.5733 153.487 54.064C153.039 54.5333 152.815 55.2907 152.815 56.336V65.2C152.815 65.4133 152.74 65.6053 152.591 65.776C152.442 65.9253 152.25 66 152.015 66H148.303C148.068 66 147.876 65.9253 147.727 65.776C147.578 65.6267 147.503 65.4347 147.503 65.2V56.336C147.503 55.2907 147.268 54.5333 146.799 54.064C146.351 53.5733 145.775 53.328 145.071 53.328C144.388 53.328 143.812 53.5733 143.343 54.064C142.895 54.5333 142.671 55.28 142.671 56.304V65.2C142.671 65.4133 142.596 65.6053 142.447 65.776C142.298 65.9253 142.106 66 141.871 66H138.063ZM174.448 66.32C171.802 66.32 169.765 65.6907 168.336 64.432C166.906 63.1733 166.128 61.4027 166 59.12C165.978 58.8427 165.968 58.3627 165.968 57.68C165.968 56.9973 165.978 56.5173 166 56.24C166.128 53.9787 166.928 52.2187 168.4 50.96C169.872 49.68 171.888 49.04 174.448 49.04C177.029 49.04 179.056 49.68 180.528 50.96C182 52.2187 182.8 53.9787 182.928 56.24C182.949 56.5173 182.96 56.9973 182.96 57.68C182.96 58.3627 182.949 58.8427 182.928 59.12C182.8 61.4027 182.021 63.1733 180.592 64.432C179.162 65.6907 177.114 66.32 174.448 66.32ZM174.448 62.416C175.386 62.416 176.08 62.1387 176.528 61.584C176.976 61.008 177.232 60.1333 177.296 58.96C177.317 58.7467 177.328 58.32 177.328 57.68C177.328 57.04 177.317 56.6133 177.296 56.4C177.232 55.248 176.965 54.384 176.496 53.808C176.048 53.232 175.365 52.944 174.448 52.944C172.677 52.944 171.738 54.096 171.632 56.4L171.6 57.68L171.632 58.96C171.674 60.1333 171.92 61.008 172.368 61.584C172.837 62.1387 173.53 62.416 174.448 62.416ZM186.938 66C186.703 66 186.511 65.9253 186.362 65.776C186.213 65.6267 186.138 65.4347 186.138 65.2V50.16C186.138 49.9253 186.213 49.7333 186.362 49.584C186.511 49.4347 186.703 49.36 186.938 49.36H190.618C190.853 49.36 191.045 49.4453 191.194 49.616C191.365 49.7653 191.45 49.9467 191.45 50.16V51.44C192.623 50.0533 194.202 49.36 196.186 49.36H197.594C197.829 49.36 198.021 49.4347 198.17 49.584C198.319 49.7333 198.394 49.9253 198.394 50.16V53.456C198.394 53.6693 198.319 53.8613 198.17 54.032C198.021 54.1813 197.829 54.256 197.594 54.256H194.49C193.615 54.256 192.933 54.5013 192.442 54.992C191.973 55.4613 191.738 56.1333 191.738 57.008V65.2C191.738 65.4347 191.653 65.6267 191.482 65.776C191.333 65.9253 191.141 66 190.906 66H186.938ZM208.193 66.32C205.633 66.32 203.617 65.6267 202.145 64.24C200.673 62.8533 199.905 60.8373 199.841 58.192V57.072C199.926 54.5547 200.705 52.592 202.177 51.184C203.67 49.7547 205.665 49.04 208.161 49.04C209.974 49.04 211.5 49.4133 212.737 50.16C213.996 50.8853 214.934 51.888 215.553 53.168C216.193 54.448 216.513 55.92 216.513 57.584V58.352C216.513 58.5653 216.438 58.7573 216.289 58.928C216.14 59.0773 215.948 59.152 215.713 59.152H205.473V59.376C205.516 60.3787 205.761 61.1893 206.209 61.808C206.657 62.4267 207.308 62.736 208.161 62.736C208.694 62.736 209.132 62.6293 209.473 62.416C209.814 62.1813 210.124 61.904 210.401 61.584C210.593 61.3493 210.742 61.2107 210.849 61.168C210.977 61.104 211.169 61.072 211.425 61.072H215.393C215.585 61.072 215.745 61.136 215.873 61.264C216.022 61.3707 216.097 61.52 216.097 61.712C216.097 62.2667 215.777 62.9067 215.137 63.632C214.518 64.3573 213.612 64.9867 212.417 65.52C211.222 66.0533 209.814 66.32 208.193 66.32ZM210.881 55.984V55.92C210.881 54.8747 210.636 54.0533 210.145 53.456C209.676 52.8373 209.014 52.528 208.161 52.528C207.329 52.528 206.668 52.8373 206.177 53.456C205.708 54.0533 205.473 54.8747 205.473 55.92V55.984H210.881Z"
          fill={fill || "#DD4250"}
        />
        <path d="M51 68.4H220.039V70H51V68.4Z" fill={fill || "#DD4250"} />
      </svg>
    </ComicCover>
  );
}

export default ReadMoreButton;
