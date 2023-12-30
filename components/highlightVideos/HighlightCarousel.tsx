import React from "react";
import HighlightDesign from "./design";
import Responsive from "./Slider";

const HighlightVideos = () => {
  return (
    <Responsive slideToShow={3}>
      <HighlightDesign
        videoUrl="https://www.youtube.com/embed/QX5ISpaGfW0"
        title="Opening Ceromony"
        description="Opening Ceremony FIFA World | Goosebumps "
      />
      {/* <HighlightDesign
        videoUrl="https://youtu.be/BtQm1SvhYdk"
        title="Match 01"
        description="Qatar vz Equador 0-2 || highlights all goals....."
      /> */}
	   {/* <HighlightDesign
        videoUrl="https://www.youtube.com/embed/VSqKTZlHM50"
        title="Match 02"
        description="England vz Iran 6-2 || highlights all goals....."
      /> */}
	   {/* <HighlightDesign
        videoUrl="https://www.youtube.com/embed/HyDR6bVzj4U"
        title="Match 03"
        description="Senegal vz Netherlands 0-2 || highlights.. "
      /> */}
	   {/* <HighlightDesign
        videoUrl="https://www.youtube.com/embed/HyDR6bVzj4U"
        title="Match 04"
        description="Usa vz Wales 0-1 || highlights.. "
      /> */}
      <HighlightDesign
        videoUrl="https://www.youtube.com/embed/pRpeEdMmmQ0"
        title="Fifa Song"
        description="Sami namina ae wakka wakka ..."
      />
      <HighlightDesign
        videoUrl="https://www.youtube.com/embed/WTJSt4wP2ME"
        title="Knan Wavin Flag"
        description="I will be stronger ..."
      />
      <HighlightDesign
        videoUrl="https://www.youtube.com/embed/TGtWWb9emYI"
        title="We are one Ole Ole  ..."
        description="Olaaa Tami ding ding ding ding ding ..."
      />
	  
      {/* <HighlightDesign />
			<HighlightDesign />
			<HighlightDesign />
			<HighlightDesign />
			<HighlightDesign /> */}
    </Responsive>
  );
};

export default HighlightVideos;
