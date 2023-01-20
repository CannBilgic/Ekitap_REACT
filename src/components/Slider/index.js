import { Box } from "@chakra-ui/react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://cdn.bkmkitap.com/Data/EditorFiles/interactive/TYT-AYT-COK-SATAN-DENEME-KITAPLARI-KAMPANYASI-BANNER.jpg" },
  { url: "https://cdn.bkmkitap.com/Data/EditorFiles/interactive/SENDEN-BIR-TANE-DAHA-YOK-MIRAC-CAGRI-AKTAS-INDIGO-KITAP-YENI-CIKAN-KITAP-TANITIM-BANNER.jpg" },
  { url: "https://cdn.bkmkitap.com/Data/EditorFiles/interactive/DIJITAL-OKUL-BANNER.jpg" },
  { url: "https://cdn.bkmkitap.com/Data/EditorFiles/interactive/PAROLA-YAYINLARI-YIL-SONUNA-OZEL-SETLER-KAMPANYASI-BANNER.jpg" },
  { url: "https://cdn.bkmkitap.com/Data/EditorFiles/interactive/YENI-YILA-OZEL-ITHAKI-YAYINLARI-KLASIKLERDE-3-AL-2-ODE-KAMPANYASI-BANNER.jpg" },
  { url: "https://cdn.bkmkitap.com/Data/EditorFiles/interactive/YIL-SONU-FIRSAT-AYI-KAMPANYASI-BANNER.jpg" },
];

const Slider = () => {
  return (
    <Box marginTop={10}>
        <SimpleImageSlider
        
        width={1870}
        height={504}
        images={images}
        slideDuration={1}
        autoPlay={true}
        showBullets={true}
        showNavs={true}
      />
    </Box>
  );
}
export default Slider;