const wasteInfo = {
  paper: {
    recyclable: true,
    bin: "Paper Recycling Bin",
    description:
      "Paper waste can usually be recycled into newspapers, notebooks, and cardboard products.",
    tip: "Keep paper dry and remove plastic or food contamination before recycling.",
  },

  cardboard: {
    recyclable: true,
    bin: "Cardboard Recycling Bin",
    description:
      "Cardboard is recyclable and commonly reused for packaging materials.",
    tip: "Flatten cardboard boxes before placing them in the recycling bin.",
  },

  plastic: {
    recyclable: true,
    bin: "Plastic Recycling Bin",
    description:
      "Most plastic containers can be recycled into new plastic products.",
    tip: "Wash plastic containers to remove food residue before recycling.",
  },

  glass: {
    recyclable: true,
    bin: "Glass Recycling Bin",
    description: "Glass can be recycled many times without losing quality.",
    tip: "Separate broken glass carefully and avoid mixing with ceramics.",
  },

  metal: {
    recyclable: true,
    bin: "Metal Recycling Bin",
    description: "Metal cans and containers are valuable recyclable materials.",
    tip: "Rinse metal cans before recycling to keep recycling streams clean.",
  },

  Unknown: {
    recyclable: false,
    bin: "General Waste Bin",
    description: "The uploaded image could not be classified confidently.",
    tip: "Please upload a clearer image taken in good lighting.",
  },
};

export default wasteInfo;
