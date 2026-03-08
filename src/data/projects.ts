export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Football Celebrity Classifier",
    description: "Built a computer vision classifier that recognises 3 football icons, achieving 89% accuracy using an SVM Linear model. Optimized model performance with GridSearchCV for hyperparameter tuning. Collected and curated dataset manually using Fatkun image downloader. Preprocessed images by cropping faces and eyes with OpenCV’s Haarcascade and applied Wavelet transforms for robust feature extraction. Deployed the trained model via a Flask REST API for real-time prediction.",
    tech: ["Python", "Flask REST API", "OpenCV", "Sci-kit-learn", "Wavelet"],
    github: "https://github.com/mohammad01ahmad/Sports-celebrity-classifier.git",
    demo: "https://sports-celebrity-classifier.vercel.app/",
    image: "/man_city_img.jpg"
  },
  {
    title: "Data Warehousing Project",
    description: "Built a Data Warehouse in SQL Server from raw datasets using the Medallion Architecture. Designed and implemented a complete ETL pipeline with data cleaning, normalization, and error handling. Performed advanced analytics & reporting in SQL, delivering insights on product performance and customer behavior.",
    tech: ["SQL", "Medallion Architecture", "Advanced Analytics"],
    github: "https://github.com/mohammad01ahmad/sql-data-warehouse-project.git",
    demo: "",
    image: "/data_warehouse_bg.png"
  },
  {
    title: "Machine Learning Progress",
    description: "A comprehensive GitHub repository showcasing my journey in mastering Machine Learning. It includes a variety of projects, from basic regression models to advanced deep learning architectures, demonstrating my growth and expertise in the field.",
    tech: ["Python", "Pandas", "Numpy", "Sci-kit Learn", "TensorFlow", "Keras"],
    github: "https://github.com/mohammad01ahmad/Data-Science-Progress.git",
    demo: "",
    image: "/ml_bg.png"
  }
];