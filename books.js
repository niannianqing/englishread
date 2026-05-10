// ============================================================
//  books.js — 书目数据
//  如何添加新书：在对应的数组里复制一行，改掉内容即可
//  pages 字段：每个字符串对应书里的一页文字
//  pages 留空数组 [] 表示还没录入文字（仍可完成任务，只是无法打分）
// ============================================================

const BOOKS_DATA = [

  // ──────────────── RAZ Level F ────────────────
  {
    id: "rf00", series: "RAZ", level: "F",
    title: "A Clown Face",
    note: "face paint, sequence, clown",
    url: "https://www.readinga-z.com",
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
    pages: []
  },
  {
    id: "rf02", series: "RAZ", level: "F",
    title: "The Big Storm",
    note: "weather, safety",
    url: "https://www.readinga-z.com",
    pages: []
  },
  {
    id: "rf03", series: "RAZ", level: "F",
    title: "Animal Babies in Grasslands",
    note: "nonfiction, animals",
    url: "https://www.readinga-z.com",
    pages: []
  },
  {
    id: "rf04", series: "RAZ", level: "F",
    title: "Making Soup",
    note: "cooking, sequence",
    url: "https://www.readinga-z.com",
    pages: []
  },
  {
    id: "rf05", series: "RAZ", level: "F",
    title: "Families",
    note: "nonfiction, social",
    url: "https://www.readinga-z.com",
    pages: []
  },

  // ──────────────── RAZ Level G ────────────────
  {
    id: "rg01", series: "RAZ", level: "G",
    title: "Dogs at Work",
    note: "jobs, dogs",
    url: "https://www.readinga-z.com",
    pages: []
  },
  {
    id: "rg02", series: "RAZ", level: "G",
    title: "Trucks",
    note: "nonfiction, vehicles",
    url: "https://www.readinga-z.com",
    pages: []
  },
  {
    id: "rg03", series: "RAZ", level: "G",
    title: "The Enormous Watermelon",
    note: "repetition, humor",
    url: "https://www.readinga-z.com",
    pages: []
  },
  {
    id: "rg04", series: "RAZ", level: "G",
    title: "Frogs",
    note: "life cycle, science",
    url: "https://www.readinga-z.com",
    pages: []
  },
  {
    id: "rg05", series: "RAZ", level: "G",
    title: "Mouse Soup",
    note: "story within story",
    url: "https://www.readinga-z.com",
    pages: []
  },

  // ──────────────── RAZ Level H ────────────────
  {
    id: "rh01", series: "RAZ", level: "H",
    title: "Where Do Birds Live?",
    note: "habitats, birds",
    url: "https://www.readinga-z.com",
    pages: []
  },
  {
    id: "rh02", series: "RAZ", level: "H",
    title: "Night Animals",
    note: "nocturnal, nonfiction",
    url: "https://www.readinga-z.com",
    pages: []
  },
  {
    id: "rh03", series: "RAZ", level: "H",
    title: "The Ugly Duckling",
    note: "classic tale",
    url: "https://www.readinga-z.com",
    pages: []
  },
  {
    id: "rh04", series: "RAZ", level: "H",
    title: "Bugs! Bugs! Bugs!",
    note: "insects, science",
    url: "https://www.readinga-z.com",
    pages: []
  },
  {
    id: "rh05", series: "RAZ", level: "H",
    title: "My Robot",
    note: "imagination, fiction",
    url: "https://www.readinga-z.com",
    pages: []
  },

  // ──────────────── 牛津树 Level F/G ────────────────
  {
    id: "of01", series: "牛津树", level: "F",
    title: "Gran",
    note: "family, grandparents",
    url: "",
    pages: []
  },
  {
    id: "of02", series: "牛津树", level: "F",
    title: "The Dragon Tree",
    note: "fantasy, adventure",
    url: "",
    pages: []
  },
  {
    id: "og01", series: "牛津树", level: "G",
    title: "Pirate Adventure",
    note: "adventure, pirates",
    url: "",
    pages: []
  },
  {
    id: "og02", series: "牛津树", level: "G",
    title: "Castle Adventure",
    note: "adventure, history",
    url: "",
    pages: []
  },
  {
    id: "oh01", series: "牛津树", level: "H",
    title: "Robin Hood",
    note: "classic story",
    url: "",
    pages: []
  },

  // ──────────────── 红火箭 Level F/G ────────────────
  {
    id: "rrf01", series: "红火箭", level: "F",
    title: "Going to School",
    note: "daily life",
    url: "",
    pages: []
  },
  {
    id: "rrf02", series: "红火箭", level: "F",
    title: "The Bike Ride",
    note: "outdoor, family",
    url: "",
    pages: []
  },
  {
    id: "rrg01", series: "红火箭", level: "G",
    title: "At the Supermarket",
    note: "shopping, community",
    url: "",
    pages: []
  },

];
