// ============================================================
//  books.js — 书目数据
//
//  新增字段说明：
//  pdfPath: PDF文件路径，放在 books/ 文件夹下
//           例如：pdfPath: "books/clownface.pdf"
//  pages:   每页文字，用于语音打分对比
//           有PDF的话页面会直接显示PDF图文
// ============================================================

const BOOKS_DATA = [

  // ──────────────── RAZ Level F ────────────────
  {
    id: "rf00", series: "RAZ", level: "F",
    title: "A Clown Face",
    note: "face paint, sequence",
    url: "https://www.readinga-z.com",
    pdfPath: "books/clownface.pdf",
    pages: [
      "How does a clown put on a face? Where does she start?",
      "First, she puts on white face paint. What comes next?",
      "How does a clown put on a face? Next, she puts paint around her mouth. She paints a big, red smile. What is next?",
      "How does a clown put on her face? Next, she paints her eyelids. What does she put on next?",
      "How does a clown put on her face? Next, she puts on big, fuzzy eyebrows. What comes after that?",
      "Then she paints big, pink circles on her cheeks. What comes next?",
      "How does a clown put on her face? Next, she puts on her red nose. It honks if you squeeze it. What does she do next?",
      "How does a clown put on her face? After putting on a red nose, she puts on a silly wig. What does she do next?",
      "Then she gets dressed. She puts on a polka-dot jacket and striped pants. And she puts on big, floppy shoes.",
      "At last the clown leaves the dressing room. Now it's time to make kids laugh."
    ]
  },
  {
    id: "rf01", series: "RAZ", level: "F",
    title: "Henry and Mudge",
    note: "pets, friendship",
    url: "https://www.readinga-z.com",
    pdfPath: "",
    pages: []
  },
  {
    id: "rf02", series: "RAZ", level: "F",
    title: "The Big Storm",
    note: "weather, safety",
    url: "https://www.readinga-z.com",
    pdfPath: "",
    pages: []
  },
  {
    id: "rf03", series: "RAZ", level: "F",
    title: "Animal Babies in Grasslands",
    note: "nonfiction, animals",
    url: "https://www.readinga-z.com",
    pdfPath: "",
    pages: []
  },
  {
    id: "rf04", series: "RAZ", level: "F",
    title: "Making Soup",
    note: "cooking, sequence",
    url: "https://www.readinga-z.com",
    pdfPath: "",
    pages: []
  },
  {
    id: "rf05", series: "RAZ", level: "F",
    title: "Families",
    note: "nonfiction, social",
    url: "https://www.readinga-z.com",
    pdfPath: "",
    pages: []
  },

  // ──────────────── RAZ Level G ────────────────
  {
    id: "rg01", series: "RAZ", level: "G",
    title: "Dogs at Work",
    note: "jobs, dogs",
    url: "https://www.readinga-z.com",
    pdfPath: "",
    pages: []
  },
  {
    id: "rg02", series: "RAZ", level: "G",
    title: "Trucks",
    note: "nonfiction, vehicles",
    url: "https://www.readinga-z.com",
    pdfPath: "",
    pages: []
  },
  {
    id: "rg03", series: "RAZ", level: "G",
    title: "The Enormous Watermelon",
    note: "repetition, humor",
    url: "https://www.readinga-z.com",
    pdfPath: "",
    pages: []
  },
  {
    id: "rg04", series: "RAZ", level: "G",
    title: "Frogs",
    note: "life cycle, science",
    url: "https://www.readinga-z.com",
    pdfPath: "",
    pages: []
  },
  {
    id: "rg05", series: "RAZ", level: "G",
    title: "Mouse Soup",
    note: "story within story",
    url: "https://www.readinga-z.com",
    pdfPath: "",
    pages: []
  },

  // ──────────────── RAZ Level H ────────────────
  {
    id: "rh01", series: "RAZ", level: "H",
    title: "Where Do Birds Live?",
    note: "habitats, birds",
    url: "https://www.readinga-z.com",
    pdfPath: "",
    pages: []
  },
  {
    id: "rh02", series: "RAZ", level: "H",
    title: "Night Animals",
    note: "nocturnal, nonfiction",
    url: "https://www.readinga-z.com",
    pdfPath: "",
    pages: []
  },
  {
    id: "rh03", series: "RAZ", level: "H",
    title: "The Ugly Duckling",
    note: "classic tale",
    url: "https://www.readinga-z.com",
    pdfPath: "",
    pages: []
  },
  {
    id: "rh04", series: "RAZ", level: "H",
    title: "Bugs! Bugs! Bugs!",
    note: "insects, science",
    url: "https://www.readinga-z.com",
    pdfPath: "",
    pages: []
  },
  {
    id: "rh05", series: "RAZ", level: "H",
    title: "My Robot",
    note: "imagination, fiction",
    url: "https://www.readinga-z.com",
    pdfPath: "",
    pages: []
  },

  // ──────────────── 牛津树 ────────────────
  {
    id: "of01", series: "牛津树", level: "F",
    title: "Gran",
    note: "family, grandparents",
    url: "", pdfPath: "", pages: []
  },
  {
    id: "of02", series: "牛津树", level: "F",
    title: "The Dragon Tree",
    note: "fantasy, adventure",
    url: "", pdfPath: "", pages: []
  },
  {
    id: "og01", series: "牛津树", level: "G",
    title: "Pirate Adventure",
    note: "adventure, pirates",
    url: "", pdfPath: "", pages: []
  },
  {
    id: "og02", series: "牛津树", level: "G",
    title: "Castle Adventure",
    note: "adventure, history",
    url: "", pdfPath: "", pages: []
  },

  // ──────────────── 红火箭 ────────────────
  {
    id: "rrf01", series: "红火箭", level: "F",
    title: "Going to School",
    note: "daily life",
    url: "", pdfPath: "", pages: []
  },
  {
    id: "rrf02", series: "红火箭", level: "F",
    title: "The Bike Ride",
    note: "outdoor, family",
    url: "", pdfPath: "", pages: []
  },

];
