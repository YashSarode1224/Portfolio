/* ========================================================
   SKILL WORKFLOWS & CONSTELLATION GRAPH KNOWLEDGE BASE
   ======================================================== */
/**
 * SKILL WORKFLOWS & RELATIONSHIPS DATABASE
 * Single source of truth for all 15 developer skills + 1 central TOOLKIT hub,
 * conceptual relationships, practical development lifecycles, and interactive animated workflow topologies.
 */

(function (root, factory) {
    var data = factory();
    if (typeof root !== 'undefined') {
        root.SKILL_WORKFLOWS_DATA = data;
    }
    if (typeof window !== 'undefined') {
        window.SKILL_WORKFLOWS_DATA = data;
    }
    if (typeof module === 'object' && module.exports) {
        module.exports = data;
    }
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
    'use strict';

    // Official Vector SVG Icons
    const logoSVGs = {
        core: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" stroke="#161616" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
        python: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.91 2c-3.16 0-2.96 1.37-2.96 1.37l.01 1.42h3.01v.43H6.84S4 4.88 4 8.04c0 3.17 1.64 3.06 1.64 3.06h.98v-1.37s-.05-1.64 1.62-1.64h2.79v-.43H8.22v-.86h3.69c3.09 0 2.96-1.37 2.96-1.37s.17-1.43-2.96-1.43zm-1.67 1.02a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2z" fill="#3776AB"/><path d="M12.09 22c3.16 0 2.96-1.37 2.96-1.37l-.01-1.42h-3.01v-.43h5.13s2.84.34 2.84-2.82c0-3.17-1.64-3.06-1.64-3.06h-.98v1.37s.05 1.64-1.62 1.64h-2.79v.43h2.81v.86h-3.69c-3.09 0-2.96 1.37-2.96 1.37s-.17 1.43 2.96 1.43zm1.67-1.02a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2z" fill="#FFD43B"/></svg>',
        numpy: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.5 3.6L12 11.4 5.5 7.8 12 4.2zM5 9.2l6 3.3v6.7l-6-3.3V9.2zm8 10v-6.7l6-3.3v6.7l-6 3.3z" fill="#4dabcf"/></svg>',
        pandas: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 3h4v18H5V3zm5 5h4v13h-4V8zm5-3h4v16h-4V5z" fill="#130754"/><circle cx="7" cy="18" r="1.5" fill="#e70488"/><circle cx="12" cy="18" r="1.5" fill="#ff9a00"/><circle cx="17" cy="18" r="1.5" fill="#00c3ff"/></svg>',
        matplotlib: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 20h18v2H3v-2zm2-2l3-10 4 6 4-11 4 15H5z" fill="none" stroke="#11557c" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="10" r="2" fill="#ff5722"/><circle cx="12" cy="16" r="2" fill="#ff9800"/><circle cx="16" cy="5" r="2" fill="#00bcd4"/><circle cx="20" cy="20" r="2" fill="#4caf50"/></svg>',
        scikitlearn: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="8" cy="12" r="5" fill="#f89939" opacity="0.9"/><circle cx="16" cy="12" r="5" fill="#3499cd" opacity="0.9"/><path d="M12 8a5 5 0 0 0 0 8 5 5 0 0 0 0-8z" fill="#ffffff" opacity="0.6"/></svg>',
        supervised: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="5" cy="6" r="3" fill="#ff4081"/><circle cx="19" cy="6" r="3" fill="#00e5ff"/><circle cx="5" cy="18" r="3" fill="#ff4081"/><circle cx="19" cy="18" r="3" fill="#00e5ff"/><line x1="8" y1="6" x2="16" y2="18" stroke="#161616" stroke-width="2.5"/><line x1="8" y1="18" x2="16" y2="6" stroke="#161616" stroke-width="2.5"/></svg>',
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 3l1.8 17.5 6.2 1.7 6.2-1.7L20 3H4zm13.3 5.4H9.5l.2 2.2h7.3l-.6 6.3-4.4 1.2-4.4-1.2-.3-3.4h2.2l.2 1.7 2.3.6 2.3-.6.3-2.6H7.1L6.5 5.8h11.2l-.4 2.6z" fill="#e34f26"/></svg>',
        css: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 3l1.8 17.5 6.2 1.7 6.2-1.7L20 3H4zm13.3 5.4H9.5l.2 2.2h7.3l-.6 6.3-4.4 1.2-4.4-1.2-.3-3.4h2.2l.2 1.7 2.3.6 2.3-.6.3-2.6H7.1L6.5 5.8h11.2l-.4 2.6z" fill="#1572b6"/></svg>',
        javascript: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" rx="3" fill="#f7df1e"/><path d="M7 17.5c.8.5 1.7.8 2.6.8 1.4 0 2.2-.7 2.2-1.8v-6.3h-2.1v6.3c0 .5-.3.8-.8.8-.4 0-.8-.1-1.1-.3l-.8.5zm7.3-.2c.8.5 1.8.8 2.8.8 1.9 0 3.1-1 3.1-2.5 0-1.4-.8-2.1-2.4-2.8-.9-.4-1.4-.7-1.4-1.2 0-.4.3-.8 1.1-.8.7 0 1.4.2 1.9.6l.8-1.5c-.7-.5-1.7-.7-2.7-.7-1.8 0-3 1-3 2.5 0 1.3.8 2.1 2.3 2.7.9.4 1.5.8 1.5 1.3 0 .5-.4.9-1.2.9-.8 0-1.6-.3-2.2-.8l-.7 1.5z" fill="#000000"/></svg>',
        react: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61dafb" stroke-width="1.8" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61dafb" stroke-width="1.8" transform="rotate(90 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61dafb" stroke-width="1.8" transform="rotate(150 12 12)"/><circle cx="12" cy="12" r="2.2" fill="#61dafb"/></svg>',
        three: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" fill="#000000"/><path d="M12 4.2L5.5 8l6.5 3.8 6.5-3.8L12 4.2z" fill="#ffffff" opacity="0.9"/><path d="M5.5 10v6l6.5 3.8v-6L5.5 10z" fill="#ffffff" opacity="0.6"/><path d="M18.5 10v6L12 19.8v-6l6.5-3.8z" fill="#ffffff" opacity="0.3"/></svg>',
        firebase: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.5 17.5L6.8 3.2c.1-.5.7-.7 1-.4l3.5 6.4-6.8 8.3zm15 0L17.2 9.6c-.2-.4-.8-.4-1 0l-2.4 4.5 5.7 3.4zm-7.7-6.2l-2.6-4.9c-.2-.4-.8-.4-1 0L3.5 18l8.3 4.6c.4.2.9.2 1.3 0l8.4-4.6-9.7-6.7z" fill="#ffa000"/></svg>',
        java: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.86 16.22s-.9 0-1.28.6c-.46.72.33 1.16.85 1.16 1.41 0 2.82-.7 2.82-.7s-1.03-.43-2.39-1.06zm-1.2-2.18s-.86.1-1.12.7c-.32.74.45 1.1 1.07 1.1 1.62 0 3.52-.76 3.52-.76s-1.64-.4-3.47-1.04zm4.45 5.56c-1.8.84-4.8 1.02-6.14-.14-.4-.35-.38-.72-.14-.98.24-.26.66-.4 1.12-.4 1.12 0 2.68.34 3.7.54.42.08 1.46.2 1.46.98zm-2.48-11.4c.54.62.9 1.42.6 2.38-.42 1.36-1.94 2.06-2.58 3.12-.52.88-.34 1.8-.34 1.8s.28-.42.92-.66c.8-.3 1.76-.08 2.38-.96.64-.9.56-2.06.3-3.04-.24-.92-.8-1.78-1.28-2.64zm3.98 10.42c.88-.1 1.88-.36 1.88-1.14 0-.82-1.04-1.2-1.88-1.2-1.4 0-2.7.58-2.7.58s1.08.38 2.7 1.76zm-1.1-2.92c.62-.08 1.28-.24 1.28-.76 0-.58-.78-.86-1.36-.86-.98 0-1.92.42-1.92.42s.78.26 2 1.2z" fill="#E76F51"/><path d="M12.92 5.5c-.46-.74-1.12-1.42-1.04-2.38.08-.94.94-1.62.94-1.62s-.42.42-.66.9c-.3.6-.32 1.3.16 1.94.46.6.9 1.16.6 2.16z" fill="#5382A1"/></svg>',
        c: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="12,2 21,7.2 21,16.8 12,22 3,16.8 3,7.2" fill="#00599C"/><text x="12" y="15" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="8.5" font-weight="bold" text-anchor="middle">C++</text></svg>',
        dsa: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="4" r="2.8" fill="#9333ea"/><circle cx="6" cy="13" r="2.8" fill="#9333ea"/><circle cx="18" cy="13" r="2.8" fill="#9333ea"/><circle cx="4" cy="20" r="2.2" fill="#a855f7"/><circle cx="8" cy="20" r="2.2" fill="#a855f7"/><circle cx="16" cy="20" r="2.2" fill="#a855f7"/><circle cx="20" cy="20" r="2.2" fill="#a855f7"/><line x1="12" y1="4" x2="6" y2="13" stroke="#161616" stroke-width="1.8"/><line x1="12" y1="4" x2="18" y2="13" stroke="#161616" stroke-width="1.8"/><line x1="6" y1="13" x2="4" y2="20" stroke="#161616" stroke-width="1.5"/><line x1="6" y1="13" x2="8" y2="20" stroke="#161616" stroke-width="1.5"/><line x1="18" y1="13" x2="16" y2="20" stroke="#161616" stroke-width="1.5"/><line x1="18" y1="13" x2="20" y2="20" stroke="#161616" stroke-width="1.5"/></svg>'
    };

    // Exactly 15 Standardized Technology Nodes + 1 Central Toolkit Anchor
    const skills = {
        core: {
            id: 'core',
            name: 'Tech Toolkit',
            label: 'TOOLKIT',
            cluster: 'core',
            clusterName: 'Core Hub',
            category: 'Central Developer Ecosystem Anchor',
            color: '#ffe54c',
            radius: 34,
            isHub: true,
            icon: logoSVGs.core,
            shortDescription: 'The central anchor connecting AI & scientific computing, modern interactive web systems, and high-performance algorithms.',
            whatItsUsedFor: 'Serving as the unified architectural hub of the developer portfolio, anchoring all 15 skills into a cohesive mental model.',
            practicalExample: 'Clicking TOOLKIT restores the entire ecosystem overview, highlighting cross-domain fluency across AI, Web/3D, and Algorithms.',
            workflow: [
                { step: 1, type: 'sequential', title: 'Architectural Selection', explanation: 'Analyze software requirements and choose optimal language and framework ecosystems.', highlightTerms: ['System Design', 'Tradeoff Analysis', 'Ecosystem Choice'], connectedTools: ['python', 'javascript', 'java', 'c'] },
                { step: 2, type: 'parallel', title: 'Domain Specialization', explanation: 'Deconstruct complex domains into modular, specialized pipelines across AI, Web/3D, and Computer Science.', highlightTerms: ['Pipelines', 'Clean Architecture', 'Modularity'], connectedTools: ['python', 'javascript', 'java', 'c'] }
            ]
        },

        // CLUSTER A: AI & DATA
        python: {
            id: 'python',
            name: 'Python',
            cluster: 'ml',
            clusterName: 'AI & Data',
            category: 'General-Purpose & Scientific Language',
            color: '#ff9b54',
            radius: 27,
            isSubHub: true,
            icon: logoSVGs.python,
            shortDescription: 'The foundational core language powering data science, scientific computation, numerical computing, and machine learning architectures.',
            whatItsUsedFor: 'Building backend microservices, scientific computation, automating data pipelines, and implementing production machine learning models.',
            practicalExample: 'Developing automated data ingestion workflows and statistical ML pipelines leveraging the Python scientific library stack.',
            graphFlow: {
                type: 'parallel',
                illuminatedNodes: ['python', 'numpy', 'pandas', 'matplotlib', 'scikitlearn', 'supervised'],
                branches: [
                    { from: 'python', to: 'numpy', type: 'primary' },
                    { from: 'python', to: 'pandas', type: 'primary' },
                    { from: 'python', to: 'matplotlib', type: 'primary' },
                    { from: 'python', to: 'scikitlearn', type: 'primary' },
                    { from: 'python', to: 'supervised', type: 'primary' }
                ]
            },
            workflow: [
                { step: 1, type: 'sequential', title: 'Problem Definition & Architecture', explanation: 'Define project scope, algorithmic objectives, expected input data contracts, and environment isolation requirements.', highlightTerms: ['Problem Scoping', 'Virtual Environment', 'Data Contracts'], connectedTools: [] },
                { step: 2, type: 'sequential', title: 'Environment & Dependency Setup', explanation: 'Initialize reproducible Python virtual environments (venv/conda) and configure required package dependencies.', highlightTerms: ['venv', 'pip', 'requirements.txt'], connectedTools: [] },
                { step: 3, type: 'sequential', title: 'Core Logic & Application Coding', explanation: 'Implement functional or object-oriented logic in pure Python utilizing idiomatic features like generators, type hints, and context managers.', highlightTerms: ['Type Hints', 'Generators', 'Context Managers'], connectedTools: [] },
                { step: 4, type: 'optional', title: 'Scientific & Data Library Integration', explanation: 'Import specialized numerical and tabular libraries (NumPy, Pandas, Scikit-Learn) strictly when mathematical operations are required.', highlightTerms: ['NumPy', 'Pandas', 'Scikit-Learn'], connectedTools: ['numpy', 'pandas', 'scikitlearn'] },
                { step: 5, type: 'sequential', title: 'Execution, Debugging & Profiling', explanation: 'Execute code locally, profile memory and CPU execution times using cProfile, and debug with breakpoint() or logging.', highlightTerms: ['cProfile', 'breakpoint()', 'logging'], connectedTools: [] },
                { step: 6, type: 'sequential', title: 'Automated Testing & Validation', explanation: 'Write automated unit and integration tests using pytest to verify numerical precision, edge conditions, and error propagation.', highlightTerms: ['pytest', 'Unit Tests', 'Coverage'], connectedTools: [] },
                { step: 7, type: 'optional', title: 'Packaging & Production Deployment', explanation: 'Containerize application with Docker, publish reusable Python wheels, or deploy API endpoints via FastAPI.', highlightTerms: ['Docker', 'FastAPI', 'CI/CD'], connectedTools: [] }
            ]
        },

        numpy: {
            id: 'numpy',
            name: 'NumPy',
            cluster: 'ml',
            clusterName: 'AI & Data',
            category: 'Numerical Vector Computation',
            color: '#ff9b54',
            radius: 23,
            icon: logoSVGs.numpy,
            shortDescription: 'Hardware-accelerated N-dimensional array processing, vectorized broadcasting, linear algebra, and mathematical operations.',
            whatItsUsedFor: 'High-performance vector and matrix calculations, multidimensional tensor reshaping, Fourier transforms, and generating random distributions.',
            practicalExample: 'Computing vectorized pairwise Euclidean distances across high-dimensional feature embeddings without Python for-loops.',
            graphFlow: {
                type: 'parallel',
                illuminatedNodes: ['numpy', 'python', 'pandas', 'scikitlearn', 'supervised'],
                branches: [
                    { from: 'python', to: 'numpy', type: 'primary' },
                    { from: 'numpy', to: 'pandas', type: 'primary', bidirectional: true },
                    { from: 'numpy', to: 'scikitlearn', type: 'primary' },
                    { from: 'numpy', to: 'supervised', type: 'supporting' }
                ]
            },
            workflow: [
                { step: 1, type: 'sequential', title: 'Tensor Allocation & Sizing', explanation: 'Allocate contiguous memory blocks via np.zeros, np.arange, or np.ascontiguousarray to maximize CPU L1/L2 cache locality.', highlightTerms: ['contiguous memory', 'cache locality', 'dtype specification'], connectedTools: ['python'] },
                { step: 2, type: 'sequential', title: 'Vectorized Broadcasting Operations', explanation: 'Execute SIMD-accelerated element-wise mathematical calculations eliminating slow interpreted Python loop overhead.', highlightTerms: ['SIMD parallelism', 'Broadcasting Rules', 'Vectorization'], connectedTools: [] },
                { step: 3, type: 'sequential', title: 'Matrix Factorization & Linear Algebra', explanation: 'Compute dot products, matrix inverses, eigenvalues, or SVD decompositions using BLAS/LAPACK bindings.', highlightTerms: ['np.linalg', 'Dot Products', 'SVD Decomposition'], connectedTools: [] },
                { step: 4, type: 'optional', title: 'Interoperability Handshake', explanation: 'Export zero-copy buffer views to Pandas DataFrames or Scikit-Learn estimators for statistical model fitting.', highlightTerms: ['Zero-Copy Buffers', 'DataFrame Ingestion', 'Feature Tensors'], connectedTools: ['pandas', 'scikitlearn'] }
            ]
        },

        pandas: {
            id: 'pandas',
            name: 'Pandas',
            cluster: 'ml',
            clusterName: 'AI & Data',
            category: 'Tabular Data Wrangling & Analysis',
            color: '#ff9b54',
            radius: 24,
            icon: logoSVGs.pandas,
            shortDescription: 'Industrial-grade data frames, relational joins, time-series transformations, handling missing values, and data aggregation.',
            whatItsUsedFor: 'Data cleaning, tabular transformations, exploratory data inspection, aggregations (groupby), and data normalization before model training.',
            practicalExample: 'Cleaning real-world messy CSV datasets, imputing missing median values, and computing rolling moving averages on time-series.',
            graphFlow: {
                type: 'hybrid',
                illuminatedNodes: ['pandas', 'python', 'matplotlib', 'scikitlearn', 'numpy', 'supervised'],
                branches: [
                    { from: 'pandas', to: 'scikitlearn', type: 'primary' },
                    { from: 'pandas', to: 'numpy', type: 'primary', bidirectional: true },
                    { from: 'pandas', to: 'supervised', type: 'supporting' }
                ],
                sequentialChains: [
                    [
                        { from: 'python', to: 'pandas', type: 'primary' },
                        { from: 'pandas', to: 'matplotlib', type: 'primary' }
                    ]
                ]
            },
            workflow: [
                { step: 1, type: 'sequential', title: 'Multi-Source Data Ingestion', explanation: 'Stream heterogeneous data from CSV, Parquet, SQL tables, or JSON APIs into strongly typed Pandas DataFrames.', highlightTerms: ['pd.read_parquet', 'Data Ingestion', 'Chunking'], connectedTools: ['python'] },
                { step: 2, type: 'sequential', title: 'Data Profiling & Quality Audit', explanation: 'Audit structural data integrity: detect missing values (.isna()), inspect data types (.dtypes), and compute descriptive statistics.', highlightTerms: ['Data Profiling', 'Null Imputation', 'Outlier Detection'], connectedTools: [] },
                { step: 3, type: 'sequential', title: 'Data Cleaning & Transformation', explanation: 'Handle nulls, normalize datetime timestamps, parse categorical variables, and apply vectorized string cleansers.', highlightTerms: ['Categorical Encoding', 'Datetime Parsing', 'Imputation'], connectedTools: ['numpy'] },
                { step: 4, type: 'sequential', title: 'Aggregation & Pivot Analytics', explanation: 'Perform SQL-like multi-index groupby operations, aggregations, and window functions to extract statistical summaries.', highlightTerms: ['Groupby', 'Aggregations', 'Window Functions'], connectedTools: [] },
                { step: 5, type: 'optional', title: 'Visual Data Handshake', explanation: 'Plot distributions directly using Matplotlib integration (.plot()) or export clean design matrix (X, y) to Scikit-Learn.', highlightTerms: ['Distribution Plots', 'Feature Matrices', 'Design Matrix'], connectedTools: ['matplotlib', 'scikitlearn'] }
            ]
        },

        matplotlib: {
            id: 'matplotlib',
            name: 'Matplotlib',
            cluster: 'ml',
            clusterName: 'AI & Data',
            category: 'Scientific Data Visualization',
            color: '#ff9b54',
            radius: 23,
            icon: logoSVGs.matplotlib,
            shortDescription: 'Publication-quality scientific charting, scatter distributions, loss curves, confusion matrices, and exploratory visual inspection.',
            whatItsUsedFor: 'Visualizing distributions, inspecting model residual errors, plotting training loss curves, and creating multi-panel scientific figures.',
            practicalExample: 'Plotting interactive ROC/AUC curves, confusion matrices, and multi-axis feature correlation heatmaps for machine learning reports.',
            graphFlow: {
                type: 'parallel',
                illuminatedNodes: ['matplotlib', 'python', 'pandas', 'scikitlearn'],
                branches: [
                    { from: 'python', to: 'matplotlib', type: 'primary' },
                    { from: 'pandas', to: 'matplotlib', type: 'primary' },
                    { from: 'scikitlearn', to: 'matplotlib', type: 'primary' }
                ]
            },
            workflow: [
                { step: 1, type: 'sequential', title: 'Figure & Axis Grid Layout', explanation: 'Instantiate structured figure canvasses and customized subplots using plt.subplots(nrows, ncols, figsize=...).', highlightTerms: ['Object-Oriented API', 'Subplots', 'Figure Canvas'], connectedTools: ['python'] },
                { step: 2, type: 'sequential', title: 'Data Mapping & Encoding', explanation: 'Map continuous and discrete variables from Pandas Series or NumPy arrays to visual marks (scatter, line, bar, histogram).', highlightTerms: ['Scatter Plots', 'Histograms', 'Color Encodings'], connectedTools: ['pandas', 'numpy'] },
                { step: 3, type: 'sequential', title: 'Styling, Typography & Polish', explanation: 'Format tick intervals, apply dark/light grid styles, configure LaTeX font math formulas, and add informational legends.', highlightTerms: ['LaTeX Math', 'Tick Locators', 'Neobrutalist Styling'], connectedTools: [] },
                { step: 4, type: 'optional', title: 'Model Diagnostics Handshake', explanation: 'Render Scikit-Learn diagnostic visualizations: ConfusionMatrixDisplay, PrecisionRecallDisplay, and learning curves.', highlightTerms: ['Confusion Matrix', 'ROC Curves', 'Residual Analysis'], connectedTools: ['scikitlearn'] }
            ]
        },

        scikitlearn: {
            id: 'scikitlearn',
            name: 'Scikit-Learn',
            cluster: 'ml',
            clusterName: 'AI & Data',
            category: 'Machine Learning & Predictive Modeling',
            color: '#ff9b54',
            radius: 25,
            icon: logoSVGs.scikitlearn,
            shortDescription: 'Production machine learning library providing estimators for classification, regression, clustering, preprocessing, and model evaluation.',
            whatItsUsedFor: 'Training supervised ML models, autorun cross-validation, hyperparameter tuning via GridSearchCV, and assembling leak-free sklearn.pipeline.Pipeline workflows.',
            practicalExample: 'Constructing an automated end-to-end ColumnTransformer and RandomForestClassifier pipeline with stratified cross-validation.',
            graphFlow: {
                type: 'parallel',
                illuminatedNodes: ['scikitlearn', 'python', 'numpy', 'pandas', 'supervised', 'matplotlib'],
                branches: [
                    { from: 'python', to: 'scikitlearn', type: 'primary' },
                    { from: 'numpy', to: 'scikitlearn', type: 'primary' },
                    { from: 'pandas', to: 'scikitlearn', type: 'primary' },
                    { from: 'supervised', to: 'scikitlearn', type: 'primary' },
                    { from: 'scikitlearn', to: 'matplotlib', type: 'primary' }
                ]
            },
            workflow: [
                { step: 1, type: 'sequential', title: 'Stratified Dataset Splitting', explanation: 'Partition cleaned data into training, validation, and holdout test sets using train_test_split with class stratification.', highlightTerms: ['train_test_split', 'Stratification', 'Holdout Testing'], connectedTools: ['pandas'] },
                { step: 2, type: 'sequential', title: 'Feature Preprocessing Pipeline', explanation: 'Construct leak-free ColumnTransformer pipelines encapsulating StandardScaler, OneHotEncoder, and SimpleImputer.', highlightTerms: ['ColumnTransformer', 'Pipeline', 'Data Leakage Prevention'], connectedTools: ['numpy'] },
                { step: 3, type: 'sequential', title: 'Estimator Selection & Training', explanation: 'Fit parametric (Logistic Regression) and non-parametric (Random Forest, Gradient Boosting) estimators using .fit(X, y).', highlightTerms: ['RandomForest', 'GradientBoosting', 'Estimator API'], connectedTools: ['supervised'] },
                { step: 4, type: 'sequential', title: 'Hyperparameter Tuning & Cross-Validation', explanation: 'Optimize model hyper-parameters via GridSearchCV or RandomizedSearchCV with K-Fold cross validation.', highlightTerms: ['GridSearchCV', 'K-Fold CV', 'Overfitting Prevention'], connectedTools: [] },
                { step: 5, type: 'optional', title: 'Model Evaluation & Visualization', explanation: 'Evaluate generalization performance via classification_report, F1-scores, and plot confusion matrices with Matplotlib.', highlightTerms: ['F1-Score', 'ROC-AUC', 'Confusion Matrix Display'], connectedTools: ['matplotlib'] }
            ]
        },

        supervised: {
            id: 'supervised',
            name: 'Supervised ML',
            cluster: 'ml',
            clusterName: 'AI & Data',
            category: 'Algorithmic Machine Learning Paradigm',
            color: '#ff9b54',
            radius: 24,
            icon: logoSVGs.supervised,
            shortDescription: 'The core machine learning paradigm where models learn functional mappings from labelled training features to continuous or categorical targets.',
            whatItsUsedFor: 'Formulating classification and regression problems, optimizing cost functions, preventing overfitting, and establishing performance metrics.',
            practicalExample: 'Formulating a customer churn prediction task with ground-truth binary labels and optimizing weighted log-loss.',
            graphFlow: {
                type: 'sequential',
                illuminatedNodes: ['supervised', 'python', 'pandas', 'numpy', 'scikitlearn', 'matplotlib'],
                branches: [
                    { from: 'pandas', to: 'supervised', type: 'supporting' },
                    { from: 'numpy', to: 'supervised', type: 'supporting' },
                    { from: 'pandas', to: 'scikitlearn', type: 'supporting' },
                    { from: 'numpy', to: 'scikitlearn', type: 'supporting' }
                ],
                sequentialChains: [
                    [
                        { from: 'python', to: 'supervised', type: 'primary' },
                        { from: 'supervised', to: 'scikitlearn', type: 'primary' },
                        { from: 'scikitlearn', to: 'matplotlib', type: 'primary' }
                    ]
                ]
            },
            workflow: [
                { step: 1, type: 'sequential', title: 'Mathematical Problem Framing', explanation: 'Classify problem type into Regression (continuous target) or Classification (discrete categories) and define loss function.', highlightTerms: ['Loss Function', 'Regression vs Classification', 'Target Formulation'], connectedTools: ['python'] },
                { step: 2, type: 'sequential', title: 'Ground-Truth Label Engineering', explanation: 'Assemble high-integrity ground-truth labels and verify label balance, distribution skew, and data drift.', highlightTerms: ['Ground Truth', 'Label Distribution', 'Target Encoding'], connectedTools: ['pandas'] },
                { step: 3, type: 'sequential', title: 'Inductive Bias & Algorithm Selection', explanation: 'Select model architecture matching problem complexity: Linear Models, Decision Trees, Ensembles, or Kernel SVMs.', highlightTerms: ['Inductive Bias', 'Decision Boundaries', 'Complexity Bounds'], connectedTools: ['scikitlearn'] },
                { step: 4, type: 'sequential', title: 'Loss Minimization & Model Fitting', explanation: 'Minimize objective functions (Mean Squared Error, Cross-Entropy) using numerical gradient descent or closed-form solutions.', highlightTerms: ['Gradient Descent', 'Cross-Entropy', 'Regularization (L1/L2)'], connectedTools: ['scikitlearn', 'numpy'] },
                { step: 5, type: 'optional', title: 'Empirical Verification & Error Audit', explanation: 'Audit model generalization errors on unseen holdout distributions and plot residual curves with Matplotlib.', highlightTerms: ['Bias-Variance Tradeoff', 'Generalization', 'Residual Plots'], connectedTools: ['matplotlib'] }
            ]
        },

        // CLUSTER B: WEB & 3D
        html: {
            id: 'html',
            name: 'HTML5',
            cluster: 'web',
            clusterName: 'Web & 3D',
            category: 'Markup & Semantic Architecture',
            color: '#00d4ff',
            radius: 23,
            icon: logoSVGs.html,
            shortDescription: 'Semantic foundation of modern web documents, accessibility structure, canvas rendering contexts, and WebGL container viewports.',
            whatItsUsedFor: 'Structuring accessible semantic documents, hosting React SPA root containers, WebGL viewports, and interactive form controls.',
            practicalExample: 'Constructing semantic DOM nodes and mounting the host root element (#root) for React single-page applications and WebGL viewports.',
            graphFlow: {
                type: 'parallel',
                illuminatedNodes: ['html', 'css', 'javascript', 'react', 'three'],
                branches: [
                    { from: 'html', to: 'css', type: 'primary', bidirectional: true },
                    { from: 'html', to: 'javascript', type: 'primary', bidirectional: true },
                    { from: 'html', to: 'react', type: 'primary' },
                    { from: 'html', to: 'three', type: 'optional' }
                ]
            },
            workflow: [
                { step: 1, type: 'sequential', title: 'Semantic Document Architecture', explanation: 'Draft clean semantic hierarchy utilizing modern structural elements: <header>, <nav>, <main>, <section>, and <footer>.', highlightTerms: ['Semantic Tags', 'Document Outline', 'SEO Hierarchy'], connectedTools: [] },
                { step: 2, type: 'sequential', title: 'Accessibility & ARIA Contract', explanation: 'Integrate accessible landmarks, roles (role="tablist"), aria-labels, and keyboard tab indices for universal screen reader access.', highlightTerms: ['ARIA Roles', 'a11y Landmarks', 'Keyboard Navigation'], connectedTools: [] },
                { step: 3, type: 'sequential', title: 'Viewport & Canvas Shell Provisioning', explanation: 'Provision hardware-accelerated <canvas> viewports for Three.js WebGL scenes and root containers for React hydration.', highlightTerms: ['<canvas>', 'Root Container', 'Viewport Meta'], connectedTools: ['react', 'three'] },
                { step: 4, type: 'optional', title: 'Form & Input Attribute Hardening', explanation: 'Implement declarative HTML5 form constraints (pattern, required, autocomplete) with zero-JS initial client validation.', highlightTerms: ['Form Constraints', 'Validation Attributes', 'Security Inputs'], connectedTools: [] }
            ]
        },

        css: {
            id: 'css',
            name: 'CSS3',
            cluster: 'web',
            clusterName: 'Web & 3D',
            category: 'Responsive Styling & Layout Engine',
            color: '#00d4ff',
            radius: 23,
            icon: logoSVGs.css,
            shortDescription: 'Modern responsive layouts, Flexbox/Grid architectures, Neobrutalist design tokens, hardware-accelerated transitions, and media queries.',
            whatItsUsedFor: 'Styling component systems, creating fluid fluid-typography grids, Neobrutalist ink borders and drop shadows, and crafting micro-interactions.',
            practicalExample: 'Engineering Neobrutalist cards with hard 4px drop shadows, stark contrast borders, and responsive mobile layout breakpoints.',
            graphFlow: {
                type: 'parallel',
                illuminatedNodes: ['css', 'html', 'javascript', 'react', 'three'],
                branches: [
                    { from: 'html', to: 'css', type: 'primary' },
                    { from: 'javascript', to: 'css', type: 'primary', bidirectional: true },
                    { from: 'css', to: 'react', type: 'primary', bidirectional: true },
                    { from: 'css', to: 'three', type: 'optional' }
                ]
            },
            workflow: [
                { step: 1, type: 'sequential', title: 'Design Token & Variable Architecture', explanation: 'Establish global CSS Custom Properties (--yellow, --ink, --border-radius) for cohesive neobrutalist theming.', highlightTerms: ['CSS Variables', 'Design Tokens', 'Color System'], connectedTools: ['html'] },
                { step: 2, type: 'sequential', title: 'Fluid Grid & Flexbox Layouts', explanation: 'Build responsive page layout scaffolds using CSS Grid (repeat(auto-fit, minmax(...))) and Flexbox alignment.', highlightTerms: ['CSS Grid', 'Flexbox', 'Responsive Design'], connectedTools: [] },
                { step: 3, type: 'sequential', title: 'Neobrutalist Micro-Interactions', explanation: 'Author stark high-contrast ink borders (border: 2px solid #161616) and tactile drop-shadow click states (transform: translate).', highlightTerms: ['Neobrutalism', 'Hard Drop Shadows', 'Hardware Acceleration'], connectedTools: [] },
                { step: 4, type: 'optional', title: 'WebGL Canvas Layering', explanation: 'Style canvas positioning, fixed viewport z-index stacking contexts, and backdrop-filter glassmorphism overlays for Three.js.', highlightTerms: ['z-index Stacking', 'Backdrop Filter', 'Overlay Layout'], connectedTools: ['three'] }
            ]
        },

        javascript: {
            id: 'javascript',
            name: 'JavaScript',
            cluster: 'web',
            clusterName: 'Web & 3D',
            category: 'Client & Runtime Programming Language',
            color: '#00d4ff',
            radius: 27,
            isSubHub: true,
            icon: logoSVGs.javascript,
            shortDescription: 'The ubiquitous scripting language of the web, driving dynamic DOM manipulation, asynchronous event loops, WebGL, and modern frontend frameworks.',
            whatItsUsedFor: 'Handling browser events, managing async state (promises/async-await), rendering 60FPS 2D/3D animations, and interfacing with cloud SDKs.',
            practicalExample: 'Building the 60FPS Neobrutalist synaptic constellation canvas graph with real-time physics, drag interactions, and photon pulses.',
            graphFlow: {
                type: 'parallel',
                illuminatedNodes: ['javascript', 'html', 'css', 'react', 'three', 'firebase'],
                branches: [
                    { from: 'html', to: 'javascript', type: 'primary', bidirectional: true },
                    { from: 'css', to: 'javascript', type: 'primary', bidirectional: true },
                    { from: 'javascript', to: 'react', type: 'primary' },
                    { from: 'javascript', to: 'three', type: 'primary' },
                    { from: 'javascript', to: 'firebase', type: 'primary' }
                ]
            },
            workflow: [
                { step: 1, type: 'sequential', title: 'State & Event Architecture', explanation: 'Design reactive state stores, event emitters, and event delegation handlers avoiding race conditions and memory leaks.', highlightTerms: ['Event Delegation', 'State Management', 'Memory Lifecycle'], connectedTools: ['html', 'css'] },
                { step: 2, type: 'sequential', title: 'Asynchronous Control Flow', explanation: 'Coordinate async network requests, WebSocket streams, and cloud databases using Promises, async/await, and AbortController.', highlightTerms: ['async/await', 'Promises', 'AbortController'], connectedTools: ['firebase'] },
                { step: 3, type: 'sequential', title: '60FPS Render Loop Implementation', explanation: 'Harness requestAnimationFrame, delta time interpolation, and vector math for physics simulations and photon pulses.', highlightTerms: ['requestAnimationFrame', 'Delta Time', 'Physics Math'], connectedTools: ['three'] },
                { step: 4, type: 'optional', title: 'Framework & Component Abstraction', explanation: 'Author reusable ES modules, custom web components, or compile into React functional components with reactive state.', highlightTerms: ['ES Modules', 'React Components', 'Component Abstraction'], connectedTools: ['react'] }
            ]
        },

        react: {
            id: 'react',
            name: 'React.js',
            cluster: 'web',
            clusterName: 'Web & 3D',
            category: 'Component UI Framework',
            color: '#00d4ff',
            radius: 24,
            icon: logoSVGs.react,
            shortDescription: 'Declarative component-based UI library leveraging virtual DOM diffing, unidirectional data flow, and hooks for reactive application state.',
            whatItsUsedFor: 'Building scalable single-page applications, dynamic dashboard interfaces, managing async state, and authoring reusable UI component libraries.',
            practicalExample: 'Building responsive portfolio cards and animated stateful filters with reactive useState/useEffect hooks mounted onto the HTML5 root container.',
            graphFlow: {
                type: 'parallel',
                illuminatedNodes: ['react', 'javascript', 'html', 'css', 'three'],
                branches: [
                    { from: 'javascript', to: 'react', type: 'primary' },
                    { from: 'html', to: 'react', type: 'primary' },
                    { from: 'css', to: 'react', type: 'primary', bidirectional: true },
                    { from: 'react', to: 'three', type: 'optional' }
                ]
            },
            workflow: [
                { step: 1, type: 'sequential', title: 'Component Hierarchy Decomposition', explanation: 'Deconstruct visual interfaces into pure functional components adhering to single responsibility principles.', highlightTerms: ['Component Tree', 'Single Responsibility', 'Pure Functions'], connectedTools: ['javascript', 'html'] },
                { step: 2, type: 'sequential', title: 'State Modeling & Custom Hooks', explanation: 'Model local UI state with useState/useReducer and author custom hooks to abstract reusable logic.', highlightTerms: ['useState', 'Custom Hooks', 'Unidirectional Data Flow'], connectedTools: ['javascript'] },
                { step: 3, type: 'sequential', title: 'Side Effects & Lifecycle Synchronization', explanation: 'Synchronize external system events, timer loops, and API fetch calls cleanly inside useEffect cleanup functions.', highlightTerms: ['useEffect', 'Cleanup Functions', 'Lifecycle Synchronization'], connectedTools: [] },
                { step: 4, type: 'optional', title: 'Scoped Styling & 3D Viewport Integration', explanation: 'Integrate scoped CSS modules or styled-components and embed Three.js canvas contexts seamlessly inside component refs.', highlightTerms: ['CSS Modules', 'styled-components', 'useRef', 'React Three Fiber'], connectedTools: ['css', 'three'] }
            ]
        },

        three: {
            id: 'three',
            name: 'Three.js',
            cluster: 'web',
            clusterName: 'Web & 3D',
            category: '3D Computer Graphics & WebGL Engine',
            color: '#00d4ff',
            radius: 24,
            icon: logoSVGs.three,
            shortDescription: 'WebGL abstraction library for rendering real-time 3D geometries, PBR lighting, custom GLSL shaders, camera controllers, and particle clouds.',
            whatItsUsedFor: 'Building interactive 3D hero backgrounds, product visualizers, matrix particle systems, camera tracking, and spatial web experiences.',
            practicalExample: 'Rendering an interactive 3D icosahedron wireframe sphere and interactive cursor-tracking boy character on your portfolio hero.',
            graphFlow: {
                type: 'parallel',
                illuminatedNodes: ['three', 'javascript', 'html', 'css', 'react'],
                branches: [
                    { from: 'javascript', to: 'three', type: 'primary' },
                    { from: 'html', to: 'three', type: 'primary' },
                    { from: 'css', to: 'three', type: 'optional' },
                    { from: 'react', to: 'three', type: 'optional' }
                ]
            },
            workflow: [
                { step: 1, type: 'sequential', title: 'Scene, Camera & Renderer Setup', explanation: 'Initialize THREE.Scene, perspective camera, and WebGLRenderer with antialiasing and alpha transparency on an HTML5 canvas.', highlightTerms: ['THREE.Scene', 'PerspectiveCamera', 'WebGLRenderer'], connectedTools: ['javascript', 'html'] },
                { step: 2, type: 'sequential', title: 'Geometry & Material Construction', explanation: 'Build 3D mesh objects combining buffer geometries (Icosahedron, Octahedron) and shaders (MeshBasicMaterial, PBR).', highlightTerms: ['BufferGeometry', 'Mesh', 'PBR Materials'], connectedTools: [] },
                { step: 3, type: 'sequential', title: 'Particle Cloud & Spatial Systems', explanation: 'Generate thousands of floating points using THREE.BufferAttribute position arrays for ambient matrix starfields.', highlightTerms: ['PointsMaterial', 'Particle Systems', 'Spatial Buffers'], connectedTools: [] },
                { step: 4, type: 'sequential', title: 'Interaction & Animation Loop', explanation: 'Implement smooth mouse parallax, LookAt easing interpolation, and requestAnimationFrame rotation cycles.', highlightTerms: ['Mouse Parallax', 'LookAt Tracking', 'requestAnimationFrame'], connectedTools: ['javascript'] }
            ]
        },

        firebase: {
            id: 'firebase',
            name: 'Firebase',
            cluster: 'web',
            clusterName: 'Web & 3D',
            category: 'Cloud Backend & Real-Time Database',
            color: '#00d4ff',
            radius: 23,
            icon: logoSVGs.firebase,
            shortDescription: 'Serverless cloud backend platform providing NoSQL Firestore real-time document sync, authentication, and secure client-side storage.',
            whatItsUsedFor: 'Storing real-time user state, hosting static web assets, handling Google/email authentication, and syncing shared collaborative data.',
            practicalExample: 'Connecting live contact message submission forms and dynamic project stats directly to Google Cloud Firestore collections.',
            graphFlow: {
                type: 'parallel',
                illuminatedNodes: ['firebase', 'javascript'],
                branches: [
                    { from: 'javascript', to: 'firebase', type: 'primary' }
                ]
            },
            workflow: [
                { step: 1, type: 'sequential', title: 'Project Initialization & Config', explanation: 'Register web app in Firebase Console and initialize modular Firebase v9+ SDK using environment secrets.', highlightTerms: ['initializeApp', 'Firebase SDK v9', 'Client Config'], connectedTools: ['javascript'] },
                { step: 2, type: 'sequential', title: 'Firestore Schema Architecture', explanation: 'Design NoSQL collection-document data structures optimized for shallow queries and real-time document listeners.', highlightTerms: ['Firestore Collections', 'NoSQL Design', 'Document IDs'], connectedTools: [] },
                { step: 3, type: 'sequential', title: 'Real-Time Sync & Query Execution', explanation: 'Listen for document updates in real time using onSnapshot() and execute typed queries with query/where/orderBy.', highlightTerms: ['onSnapshot', 'Real-time Listeners', 'Compound Queries'], connectedTools: ['javascript'] },
                { step: 4, type: 'optional', title: 'Security Rules Hardening', explanation: 'Author granular Firestore Security Rules ensuring users can only read/write their own authenticated document paths.', highlightTerms: ['Security Rules', 'RBAC', 'Data Validation'], connectedTools: [] }
            ]
        },

        // CLUSTER C: DSA
        java: {
            id: 'java',
            name: 'Java',
            cluster: 'cs',
            clusterName: 'DSA',
            category: 'Object-Oriented Programming Language',
            color: '#ff7eb6',
            radius: 26,
            isSubHub: true,
            icon: logoSVGs.java,
            shortDescription: 'Robust, strongly typed, object-oriented programming language used for scalable enterprise backends and algorithmic DSA implementation.',
            whatItsUsedFor: 'Implementing object-oriented systems, enterprise backends, and algorithmic problem-solving with the Java Collections Framework.',
            practicalExample: 'Implementing custom generic data structures and solving complex algorithmic graph problems with high type safety in Java.',
            graphFlow: {
                type: 'parallel',
                illuminatedNodes: ['java', 'dsa'],
                branches: [
                    { from: 'java', to: 'dsa', type: 'primary' }
                ]
            },
            workflow: [
                { step: 1, type: 'sequential', title: 'Language Fundamentals', explanation: 'Master strong static typing, primitive data types, memory layout (stack vs heap), and JVM compilation lifecycle (javac/java).', highlightTerms: ['static typing', 'primitive types', 'JVM bytecode'], connectedTools: [] },
                { step: 2, type: 'sequential', title: 'Methods, Arrays & Strings', explanation: 'Implement modular static/instance methods, contiguous arrays, and immutable String operations with StringBuilder.', highlightTerms: ['methods', 'arrays', 'StringBuilder'], connectedTools: [] },
                { step: 3, type: 'sequential', title: 'Object-Oriented Architecture', explanation: 'Design decoupled class hierarchies leveraging OOP pillars: Encapsulation, Inheritance, Polymorphism, and Abstract Interfaces.', highlightTerms: ['Encapsulation', 'Polymorphism', 'Interfaces'], connectedTools: [] },
                { step: 4, type: 'sequential', title: 'Collections Framework Mastery', explanation: 'Harness Java Collections Framework: ArrayList, LinkedList, HashMap, HashSet, TreeMap, and PriorityQueue.', highlightTerms: ['Collections', 'HashMap', 'PriorityQueue'], connectedTools: ['dsa'] },
                { step: 5, type: 'parallel', title: 'Generics & Exception Safety', explanation: 'Author parameterized generic classes (<T>) for type-safe data containers and implement robust try-catch-finally error handling.', highlightTerms: ['Generics <T>', 'type safety', 'Exception handling'], connectedTools: [] },
                { step: 6, type: 'sequential', title: 'Data Structures Implementation', explanation: 'Write clean, memory-efficient implementations of trees, graphs, heaps, and dynamic arrays in pure Java.', highlightTerms: ['trees', 'graphs', 'heaps'], connectedTools: ['dsa'] },
                { step: 7, type: 'sequential', title: 'Algorithmic Problem-Solving Practice', explanation: 'Solve complex algorithmic challenges and patterns utilizing the Java Collections Framework for fast O(1) lookups and O(log N) operations.', highlightTerms: ['Java Collections', 'problem patterns', 'time complexity'], connectedTools: ['dsa'] }
            ]
        },

        c: {
            id: 'c',
            name: 'C / C++',
            cluster: 'cs',
            clusterName: 'DSA',
            category: 'Systems & High-Performance Programming',
            color: '#ff7eb6',
            radius: 23,
            icon: logoSVGs.c,
            shortDescription: 'High-performance compiled language providing low-level hardware control, raw memory management, and the rich C++ Standard Template Library (STL).',
            whatItsUsedFor: 'Systems programming, high-frequency execution engines, embedded devices, and performance-critical software infrastructure.',
            practicalExample: 'Implementing systems utilities with explicit pointer dereferencing, RAII smart pointers, and zero-cost STL container abstractions.',
            graphFlow: {
                type: 'parallel',
                illuminatedNodes: ['c'],
                branches: []
            },
            workflow: [
                { step: 1, type: 'sequential', title: 'Low-Level Architecture & Compilation', explanation: 'Understand compilation pipelines (preprocessing, assembly, linking) with GCC/Clang and standard flags (-std=c++17, -O2).', highlightTerms: ['GCC/Clang', 'linking', 'optimization flags'], connectedTools: [] },
                { step: 2, type: 'sequential', title: 'Pointers & Dynamic Memory Management', explanation: 'Manage explicit address spaces with raw pointers (&, *), dynamic allocation (new/delete, malloc/free), and stack vs heap boundaries.', highlightTerms: ['raw pointers', 'heap allocation', 'memory layout'], connectedTools: [] },
                { step: 3, type: 'sequential', title: 'RAII & Modern Smart Pointers', explanation: 'Guarantee leak-free resource safety via Resource Acquisition Is Initialization (RAII), std::unique_ptr, and std::shared_ptr.', highlightTerms: ['RAII', 'std::unique_ptr', 'memory safety'], connectedTools: [] },
                { step: 4, type: 'sequential', title: 'Standard Template Library (STL)', explanation: 'Utilize high-performance STL containers (std::vector, std::unordered_map, std::priority_queue) and generic algorithms (std::sort).', highlightTerms: ['STL', 'std::vector', 'std::unordered_map'], connectedTools: [] },
                { step: 5, type: 'sequential', title: 'Systems Data Structure Design', explanation: 'Build bespoke low-level pointer linkages (trees, graphs, tries) optimized for zero runtime overhead.', highlightTerms: ['pointer manipulation', 'custom structs', 'zero-cost abstractions'], connectedTools: [] },
                { step: 6, type: 'parallel', title: 'Algorithmic Optimization', explanation: 'Optimize runtime with fast I/O (cin.tie(NULL)), bitwise operations, custom comparators, and cache-line spatial locality.', highlightTerms: ['fast I/O', 'bitwise math', 'spatial locality'], connectedTools: [] },
                { step: 7, type: 'sequential', title: 'Systems Benchmarking & Profiling', explanation: 'Profile execution with Valgrind / GDB, measure throughput, and benchmark systems algorithm implementations in C++.', highlightTerms: ['profiling', 'Valgrind', 'throughput'], connectedTools: [] }
            ]
        },

        dsa: {
            id: 'dsa',
            name: 'DSA',
            cluster: 'cs',
            clusterName: 'DSA',
            category: 'Data Structures & Algorithms',
            color: '#ff7eb6',
            radius: 24,
            icon: logoSVGs.dsa,
            shortDescription: 'Mathematical foundations of computational problem solving, data organization, and algorithmic efficiency, implemented in Java.',
            whatItsUsedFor: 'Designing asymptotically optimal solutions, organizing memory structures, evaluating Big-O limits, and solving real-world computational bottlenecks.',
            practicalExample: 'Implementing custom generic data structures and solving complex algorithmic graph problems with high type safety in Java.',
            graphFlow: {
                type: 'sequential',
                illuminatedNodes: ['dsa', 'java'],
                branches: [
                    { from: 'java', to: 'dsa', type: 'primary' }
                ],
                sequentialChains: [
                    [
                        { from: 'java', to: 'dsa', type: 'primary' }
                    ]
                ]
            },
            workflow: [
                { step: 1, type: 'sequential', title: 'Problem Deconstruction', explanation: 'Read problem specification, identify input-output boundaries, data types, constraints, and implicit edge cases.', highlightTerms: ['constraints', 'edge cases', 'problem specification'], connectedTools: [] },
                { step: 2, type: 'sequential', title: 'Brute-Force Formulation', explanation: 'Devise an intuitive brute-force algorithm to establish a verifiable baseline proof-of-concept and determine upper-bound complexity.', highlightTerms: ['brute-force', 'baseline proof', 'upper bound'], connectedTools: [] },
                { step: 3, type: 'sequential', title: 'Data Structure Selection', explanation: 'Select optimal underlying memory structure: Arrays, Linked Lists, Hash Tables, Trees, Heaps, Disjoint Sets, or Graphs in Java.', highlightTerms: ['Hash Tables', 'Heaps', 'Disjoint Sets'], connectedTools: ['java'] },
                { step: 4, type: 'sequential', title: 'Algorithmic Pattern Matching', explanation: 'Identify established algorithmic strategies: Two Pointers, Sliding Window, Fast & Slow Pointers, BFS/DFS, Binary Search, or Dynamic Programming.', highlightTerms: ['Two Pointers', 'Sliding Window', 'Dynamic Programming'], connectedTools: [] },
                { step: 5, type: 'sequential', title: 'Big-O Complexity Analysis', explanation: 'Rigorously prove worst-case asymptotic Time Complexity O(N) and auxiliary Space Complexity O(1) before writing code.', highlightTerms: ['Time Complexity O(N)', 'Space Complexity O(1)', 'asymptotic bounds'], connectedTools: [] },
                { step: 6, type: 'sequential', title: 'Java Implementation', explanation: 'Translate conceptual algorithm into clean, idiomatic, typed Java code using classes and the Java Collections Framework.', highlightTerms: ['Java syntax', 'Collections', 'generics'], connectedTools: ['java'] },
                { step: 7, type: 'parallel', title: 'Edge Case Verification', explanation: 'Trace edge conditions: empty inputs, single-element sets, duplicates, negative numbers, extreme scale boundaries, and integer overflow.', highlightTerms: ['edge cases', 'integer overflow', 'boundary tracing'], connectedTools: [] },
                { step: 8, type: 'sequential', title: 'Algorithm Verification & Benchmarking', explanation: 'Execute comprehensive test suites verifying correctness against edge cases, boundary scale limits, and stress benchmarks.', highlightTerms: ['test suites', 'verification', 'benchmarks'], connectedTools: ['java'] },
                { step: 9, type: 'optional', title: 'Refinement & Space-Time Tradeoff', explanation: 'Iterate to eliminate auxiliary memory (e.g. converting recursive calls to iterative loops to achieve O(1) stack space).', highlightTerms: ['tail recursion', 'space optimization', 'iterative loops'], connectedTools: [] }
            ]
        }
    };

    // Standardized & Typed Conceptual & Practical Relationships (29 Relationships Total)
    const relationships = [
        // --- CENTRAL TOOLKIT ANCHORS (Structural Hub Links) ---
        {
            source: 'core',
            target: 'python',
            type: 'hub',
            label: 'AI Ecosystem Lead',
            description: 'Central developer toolkit anchor connecting to Python and the AI & scientific data stack.'
        },
        {
            source: 'core',
            target: 'javascript',
            type: 'hub',
            label: 'Web Ecosystem Lead',
            description: 'Central developer toolkit anchor connecting to JavaScript and the modern interactive web stack.'
        },
        {
            source: 'core',
            target: 'java',
            type: 'hub',
            label: 'DSA & OOP Lead',
            description: 'Central developer toolkit anchor connecting to Java and object-oriented data structures.'
        },
        {
            source: 'core',
            target: 'c',
            type: 'hub',
            label: 'Systems Programming Lead',
            description: 'Central developer toolkit anchor connecting to C/C++ low-level systems, direct memory control, and RAII.'
        },

        // --- CLUSTER A: AI & DATA (6 Skills) ---
        {
            source: 'python',
            target: 'numpy',
            type: 'primary',
            label: 'Numerical Arrays Foundation',
            description: 'Python code imports NumPy C-extensions to bypass interpreted loops and perform vectorized matrix math.'
        },
        {
            source: 'python',
            target: 'pandas',
            type: 'primary',
            label: 'DataFrames & Data Wrangling',
            description: 'Python utilizes Pandas for structural tabular data manipulation, joins, filtering, and time-series workflows.'
        },
        {
            source: 'python',
            target: 'matplotlib',
            type: 'primary',
            label: 'Scientific Plotting Canvas',
            description: 'Python drives the Matplotlib object-oriented plotting API to generate visual charts, figures, and diagnostic plots.'
        },
        {
            source: 'python',
            target: 'scikitlearn',
            type: 'primary',
            label: 'Model Training Architecture',
            description: 'Python provides the language environment for assembling and executing Scikit-Learn predictive modeling pipelines.'
        },
        {
            source: 'python',
            target: 'supervised',
            type: 'primary',
            label: 'Core ML Paradigm Execution',
            description: 'Python code implements the mathematical formulations, loss functions, and optimization routines of Supervised ML.'
        },
        {
            source: 'numpy',
            target: 'pandas',
            type: 'primary',
            label: 'Array Backing Storage',
            description: 'Pandas DataFrames use NumPy 1D and 2D ndarrays as their underlying memory block manager for numerical columns.'
        },
        {
            source: 'numpy',
            target: 'scikitlearn',
            type: 'primary',
            label: 'Tensor Ingestion',
            description: 'Scikit-Learn estimators ingest NumPy ndarrays directly as input feature matrices (X) and target vectors (y).'
        },
        {
            source: 'numpy',
            target: 'supervised',
            type: 'supporting',
            label: 'Matrix & Tensor Math',
            description: 'Vectorized linear algebra (dot products, Euclidean distance, matrix inversion) underpins supervised loss optimization.'
        },
        {
            source: 'pandas',
            target: 'scikitlearn',
            type: 'primary',
            label: 'Feature Matrix Preprocessing',
            description: 'Pandas cleans and extracts tabular features before feeding encoded arrays into Scikit-Learn transformers.'
        },
        {
            source: 'pandas',
            target: 'matplotlib',
            type: 'primary',
            label: 'Data Inspection & Plotting',
            description: 'Pandas Series and DataFrames map directly to Matplotlib axes for rapid visual distribution and trend analysis.'
        },
        {
            source: 'pandas',
            target: 'supervised',
            type: 'supporting',
            label: 'Tabular Dataset Preparation',
            description: 'Supervised tabular problems rely on Pandas for dataset hygiene, imputation, and column transformations.'
        },
        {
            source: 'scikitlearn',
            target: 'matplotlib',
            type: 'primary',
            label: 'Model Evaluation Visualization',
            description: 'Matplotlib plots Scikit-Learn confusion matrices, ROC/AUC curves, precision-recall tradeoffs, and residual plots.'
        },
        {
            source: 'scikitlearn',
            target: 'supervised',
            type: 'primary',
            label: 'Estimator Implementation',
            description: 'Scikit-Learn implements supervised learning algorithms: Logistic Regression, Random Forests, SVMs, and Gradient Boosting.'
        },

        // --- CLUSTER B: WEB & 3D (6 Skills) ---
        {
            source: 'html',
            target: 'css',
            type: 'primary',
            label: 'Layout & Presentation',
            description: 'HTML5 semantic elements provide document structure styled with CSS3 flexbox, grid, and CSS custom property themes.'
        },
        {
            source: 'html',
            target: 'javascript',
            type: 'primary',
            label: 'DOM Access & Events',
            description: 'JavaScript queries HTML5 DOM nodes and attaches event listeners for user input and browser interaction.'
        },
        {
            source: 'html',
            target: 'react',
            type: 'primary',
            label: 'Application Hosting & DOM Integration',
            description: 'HTML5 index.html document provides the root DOM container (#root) and viewport meta headers required to mount and host React Single Page Applications.'
        },
        {
            source: 'html',
            target: 'three',
            type: 'optional',
            label: 'WebGL Canvas Container',
            description: 'HTML5 <canvas> element hosts the Three.js WebGL rendering context and provides viewport dimensions.'
        },
        {
            source: 'css',
            target: 'javascript',
            type: 'primary',
            label: 'Dynamic Class & Style Toggles',
            description: 'JavaScript manipulates CSS class lists and inline CSS variables for responsive runtime UI state changes.'
        },
        {
            source: 'css',
            target: 'react',
            type: 'primary',
            label: 'Component Styling & DOM Integration',
            description: 'CSS3 styles React component hierarchies via CSS Modules, styled-components, and scoped design tokens, integrating application styling into the component DOM.'
        },
        {
            source: 'css',
            target: 'three',
            type: 'optional',
            label: 'Overlay & Canvas Styling',
            description: 'CSS rules manage canvas container layout, z-index layering, glassmorphism overlays, and cursor styling.'
        },
        {
            source: 'javascript',
            target: 'react',
            type: 'primary',
            label: "React's Underlying Programming Language",
            description: "Modern ECMAScript (ES6+, JSX transpilation, closures, async/await) serves as the core programming foundation powering React functional components, hooks, and virtual DOM diffing."
        },
        {
            source: 'javascript',
            target: 'three',
            type: 'primary',
            label: 'Scene Graph & WebGL Engine',
            description: 'JavaScript creates Three.js scenes, cameras, lights, shaders, requestAnimationFrame render loops, and raycasters.'
        },
        {
            source: 'javascript',
            target: 'firebase',
            type: 'primary',
            label: 'Cloud SDK Integration',
            description: 'JavaScript initializes the Firebase Web SDK v9+ for async Firestore queries and auth token handling.'
        },
        {
            source: 'react',
            target: 'three',
            type: 'optional',
            label: 'Declarative 3D Canvas',
            description: 'Three.js animation loops are embedded within React component refs (or React Three Fiber) for synchronized UI/3D states.'
        },

        // --- CLUSTER C: DSA (3 Skills) ---
        {
            source: 'java',
            target: 'dsa',
            type: 'primary',
            label: 'OOP Data Structures Implementation',
            description: 'Java classes and the Java Collections Framework (ArrayList, HashMap, PriorityQueue) implement core DSA structures with strong static typing.'
        }
    ];

    // Cluster Metadata Definitions
    const clusters = {
        ml: {
            id: 'ml',
            name: 'AI & Data',
            color: '#ff9b54',
            count: 6,
            description: 'Machine learning, numerical tensors, data wrangling, and exploratory statistics.',
            skillIds: ['python', 'numpy', 'pandas', 'matplotlib', 'scikitlearn', 'supervised']
        },
        web: {
            id: 'web',
            name: 'Web & 3D',
            color: '#00d4ff',
            count: 6,
            description: 'Modern frontend engineering, component systems, WebGL spatial graphics, and cloud backends.',
            skillIds: ['html', 'css', 'javascript', 'react', 'three', 'firebase']
        },
        cs: {
            id: 'cs',
            name: 'DSA',
            color: '#ff7eb6',
            count: 3,
            description: 'Computer science core, object-oriented systems, algorithmic optimization, and problem solving.',
            skillIds: ['java', 'c', 'dsa']
        }
    };

    return {
        logoSVGs,
        skills,
        relationships,
        clusters,
        getSkill(id) {
            return skills[id] || null;
        },
        getRelationshipsFor(skillId) {
            return relationships.filter(r => r.source === skillId || r.target === skillId);
        },
        getConnectedSkillIds(skillId) {
            const set = new Set();
            relationships.forEach(r => {
                if (r.source === skillId) set.add(r.target);
                if (r.target === skillId) set.add(r.source);
            });
            return Array.from(set);
        }
    };
}));


const container = document.getElementById('canvas-container');

// --- Concept 3: Authentic Neobrutalist Synaptic Constellation Engine ---
(function initSynapticSkillGraph() {
    const wrap = document.getElementById('graph-canvas-wrap');
    const canvas = document.getElementById('synaptic-canvas');
    const hudBadge = document.getElementById('graph-card-badge');
    const hudTitle = document.getElementById('graph-card-title');
    const hudDesc = document.getElementById('graph-card-connections');
    const resetBtn = document.getElementById('graph-reset-btn');
    const filterBtns = document.querySelectorAll('.graph-filter-btn');
    const workflowPanel = document.getElementById('graph-workflow-panel');

    if (!wrap || !canvas) return;

    // Single source of truth from skill-workflows.js
    const db = window.SKILL_WORKFLOWS_DATA;
    if (!db) {
        console.error('SKILL_WORKFLOWS_DATA is not loaded. Ensure skill-workflows.js is included before script.js.');
        return;
    }

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    // Preload SVG Logos for 60FPS Canvas Blitting
    const loadedImages = {};
    Object.keys(db.logoSVGs).forEach((key) => {
        const img = new Image();
        img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(db.logoSVGs[key]);
        loadedImages[key] = img;
    });

    // 16 Standardized Skills + 1 Central TOOLKIT Node (17 Nodes Total)
    const rawNodes = Object.values(db.skills).map((s) => ({
        id: s.id,
        name: s.name,
        label: s.label || s.name,
        cluster: s.cluster,
        clusterName: s.clusterName,
        category: s.category,
        color: s.color,
        radius: s.radius || 24,
        isSubHub: !!s.isSubHub,
        isHub: !!s.isHub,
        shortDescription: s.shortDescription,
        graphFlow: s.graphFlow
    }));

    // Standardized & Typed Skill Relationships
    const rawLinks = db.relationships.map((r) => {
        let len = 105;
        let strength = 0.85;
        if (r.type === 'hub') {
            len = 125;
            strength = 1.15;
        } else if (r.type === 'primary') {
            len = 95;
            strength = 0.95;
        } else if (r.type === 'supporting') {
            len = 120;
            strength = 0.70;
        } else if (r.type === 'optional') {
            len = 135;
            strength = 0.50;
        }
        return {
            source: r.source,
            target: r.target,
            type: r.type,
            label: r.label,
            description: r.description,
            length: len,
            strength: strength
        };
    });

    let nodes = [];
    let links = [];
    let nodeMap = new Map();
    let selectedNodeId = null;
    let hoveredNode = null;
    let draggedNode = null;
    let activeFilter = 'all';
    let mouseX = 0;
    let mouseY = 0;
    let downX = 0;
    let downY = 0;
    let hasMoved = false;
    let isVisible = true;
    let animFrameId = null;

    // Canvas Resize & DPR Handling
    function resize() {
        const oldW = width;
        const oldH = height;
        width = wrap.clientWidth;
        height = wrap.clientHeight;
        dpr = window.devicePixelRatio || 1;

        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        if (nodes.length === 0) {
            initPositions();
        } else if (oldW > 0 && oldH > 0 && (oldW !== width || oldH !== height)) {
            const scaleX = width / oldW;
            const scaleY = height / oldH;
            const cx = width / 2;
            const cy = height / 2 - 15;
            nodes.forEach((n) => {
                if (n.isHub) {
                    n.x = cx;
                    n.y = cy;
                    n.vx = 0;
                    n.vy = 0;
                    return;
                }
                const pad = n.radius + 20;
                n.x = Math.max(pad, Math.min(width - pad, n.x * scaleX));
                n.y = Math.max(pad, Math.min(height - pad, n.y * scaleY));
                n.vx = 0;
                n.vy = 0;
            });
        }
    }

    // Helper: Draw Neobrutalist Rounded Rectangle
    function drawRoundRect(context, x, y, w, h, r = 5) {
        context.beginPath();
        context.moveTo(x + r, y);
        context.lineTo(x + w - r, y);
        context.arcTo(x + w, y, x + w, y + r, r);
        context.lineTo(x + w, y + h - r);
        context.arcTo(x + w, y + h, x + w - r, y + h, r);
        context.lineTo(x + r, y + h);
        context.arcTo(x, y + h, x, y + h - r, r);
        context.lineTo(x, y + r);
        context.arcTo(x, y, x + r, y, r);
        context.closePath();
    }

    // Initialize Positions in 3 Organic Clusters with Central TOOLKIT Anchor
    function initPositions() {
        const cx = width / 2;
        const cy = height / 2 - 15;

        // Cluster Centers
        const mlCenter = { x: cx - Math.min(width * 0.25, 230), y: cy - 25 };
        const webCenter = { x: cx + Math.min(width * 0.25, 230), y: cy - 25 };
        const csCenter = { x: cx, y: cy + Math.min(height * 0.28, 145) };

        // Relative polar distribution within clusters
        const mlOffsets = {
            python: { x: 0, y: 0 },
            numpy: { x: -85, y: -65 },
            pandas: { x: -105, y: 35 },
            matplotlib: { x: -35, y: 95 },
            scikitlearn: { x: 65, y: -80 },
            supervised: { x: 95, y: 30 }
        };

        const webOffsets = {
            javascript: { x: 0, y: 0 },
            html: { x: -65, y: -85 },
            css: { x: -105, y: 15 },
            react: { x: 70, y: -75 },
            three: { x: 105, y: 15 },
            firebase: { x: 25, y: 95 }
        };

        const csScale = Math.min(width / 800, 1);
        const csOffsets = {
            c: { x: -110 * csScale, y: 15 },
            java: { x: 0 * csScale, y: 10 },
            dsa: { x: 110 * csScale, y: 25 }
        };

        nodes = rawNodes.map((n) => {
            let posX = cx;
            let posY = cy;

            if (n.isHub || n.id === 'core') {
                posX = cx;
                posY = cy;
            } else if (n.cluster === 'ml') {
                const off = mlOffsets[n.id] || { x: 0, y: 0 };
                posX = mlCenter.x + off.x;
                posY = mlCenter.y + off.y;
            } else if (n.cluster === 'web') {
                const off = webOffsets[n.id] || { x: 0, y: 0 };
                posX = webCenter.x + off.x;
                posY = webCenter.y + off.y;
            } else if (n.cluster === 'cs') {
                const off = csOffsets[n.id] || { x: 0, y: 0 };
                posX = csCenter.x + off.x;
                posY = csCenter.y + off.y;
            }

            const pad = n.radius + 24;

            return {
                ...n,
                x: Math.max(pad, Math.min(width - pad, posX)),
                y: Math.max(pad, Math.min(height - pad, posY)),
                vx: 0,
                vy: 0,
                fx: n.isHub ? cx : null,
                fy: n.isHub ? cy : null
            };
        });

        nodeMap = new Map();
        nodes.forEach((n) => nodeMap.set(n.id, n));

        links = rawLinks.map((l) => ({
            ...l,
            sourceNode: nodeMap.get(l.source),
            targetNode: nodeMap.get(l.target),
            photonProg: Math.random()
        }));
    }

    // Physics Simulation with Central Toolkit Anchor
    function updatePhysics() {
        const damping = 0.86;
        const cx = width / 2;
        const cy = height / 2 - 15;

        // 1. Coulomb Repulsion
        for (let i = 0; i < nodes.length; i++) {
            const na = nodes[i];
            for (let j = i + 1; j < nodes.length; j++) {
                const nb = nodes[j];
                const dx = nb.x - na.x;
                const dy = nb.y - na.y;
                const distSq = dx * dx + dy * dy || 1;
                const dist = Math.sqrt(distSq);

                const force = 11000 / (distSq + 320);
                const fx = (dx / dist) * force;
                const fy = (dy / dist) * force;

                if (!na.isHub && !na.fx) { na.vx -= fx; na.vy -= fy; }
                if (!nb.isHub && !nb.fx) { nb.vx += fx; nb.vy += fy; }
            }
        }

        // 2. Strict Collision Prevention (Leaves room for circle + label tag below)
        for (let i = 0; i < nodes.length; i++) {
            const na = nodes[i];
            for (let j = i + 1; j < nodes.length; j++) {
                const nb = nodes[j];
                const dx = nb.x - na.x;
                const dy = nb.y - na.y;
                const dist = Math.hypot(dx, dy) || 1;
                const minDist = na.radius + nb.radius + 36;

                if (dist < minDist) {
                    const overlap = (minDist - dist) / 2;
                    const nx = dx / dist;
                    const ny = dy / dist;

                    if (!na.isHub && !na.fx) { na.x -= nx * overlap; na.y -= ny * overlap; }
                    if (!nb.isHub && !nb.fx) { nb.x += nx * overlap; nb.y += ny * overlap; }
                }
            }
        }

        // 3. Hooke's Law Springs
        links.forEach((l) => {
            const s = l.sourceNode;
            const t = l.targetNode;
            if (!s || !t) return;

            const dx = t.x - s.x;
            const dy = t.y - s.y;
            const dist = Math.hypot(dx, dy) || 1;
            const delta = dist - l.length;
            const force = delta * 0.032 * (l.strength || 1);

            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;

            if (!s.isHub && !s.fx) { s.vx += fx; s.vy += fy; }
            if (!t.isHub && !t.fx) { t.vx -= fx; t.vy -= fy; }

            // Move photon along link
            l.photonProg = (l.photonProg + 0.0075) % 1;
        });

        // 4. Cluster Gravity Pull & Bounds
        nodes.forEach((n) => {
            if (n.isHub) {
                // Central TOOLKIT anchor pinned to center unless dragged
                if (draggedNode && draggedNode.id === n.id) {
                    n.x = n.fx;
                    n.y = n.fy;
                } else {
                    n.x = cx;
                    n.y = cy;
                    n.vx = 0;
                    n.vy = 0;
                }
                return;
            }

            if (n.fx !== null && n.fy !== null) {
                n.x = n.fx;
                n.y = n.fy;
                n.vx = 0;
                n.vy = 0;
            } else {
                // Cluster anchor gentle pull
                let targetX = cx;
                let targetY = cy;
                if (n.cluster === 'ml') {
                    targetX = cx - Math.min(width * 0.22, 180);
                    targetY = cy - 20;
                } else if (n.cluster === 'web') {
                    targetX = cx + Math.min(width * 0.22, 180);
                    targetY = cy - 20;
                } else if (n.cluster === 'cs') {
                    targetX = cx;
                    targetY = cy + Math.min(height * 0.25, 130);
                }

                n.vx += (targetX - n.x) * 0.0018;
                n.vy += (targetY - n.y) * 0.0018;

                n.vx *= damping;
                n.vy *= damping;

                // Rest threshold to prevent micro-oscillations & blurry sub-pixel text
                if (Math.abs(n.vx) < 0.02) n.vx = 0;
                if (Math.abs(n.vy) < 0.02) n.vy = 0;

                n.x += n.vx;
                n.y += n.vy;
            }

            // Boundary containment
            const padX = n.radius + 35;
            const padY = n.radius + 30;

            if (n.x < padX) { n.x = padX; n.vx *= -0.5; }
            if (n.x > width - padX) { n.x = width - padX; n.vx *= -0.5; }
            if (n.y < padY) { n.y = padY; n.vy *= -0.5; }
            if (n.y > height - padY) { n.y = height - padY; n.vy *= -0.5; }
        });
    }

    // Render Canvas
    function draw() {
        ctx.clearRect(0, 0, width, height);

        const currentInk = (typeof getComputedStyle === 'function' ? getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() : '') || '#161616';
        const currentPaper = (typeof getComputedStyle === 'function' ? getComputedStyle(document.documentElement).getPropertyValue('--paper').trim() : '') || '#fffdf5';

        const selectedNode = selectedNodeId ? nodes.find(n => n.id === selectedNodeId) : null;
        const now = performance.now() * 0.001;

        // Active workflow link map & illuminated nodes
        const activeFlowLinkMap = new Map();
        const illuminatedSet = new Set();

        const flowBranches = (selectedNode && selectedNode.graphFlow && selectedNode.graphFlow.branches) || [];
        const flowChains = (selectedNode && selectedNode.graphFlow && selectedNode.graphFlow.sequentialChains) || [];

        if (selectedNode) {
            illuminatedSet.add(selectedNode.id);
            if (selectedNode.graphFlow && selectedNode.graphFlow.illuminatedNodes) {
                selectedNode.graphFlow.illuminatedNodes.forEach(id => illuminatedSet.add(id));
            }

            // Helper to lookup canvas link between two node IDs
            function findLink(fromId, toId) {
                return links.find(l => 
                    (l.source === fromId && l.target === toId) ||
                    (l.source === toId && l.target === fromId)
                );
            }

            // Map parallel branches
            flowBranches.forEach((b, idx) => {
                const l = findLink(b.from, b.to);
                if (l) {
                    activeFlowLinkMap.set(l, {
                        type: b.type || 'primary',
                        bidirectional: !!b.bidirectional,
                        from: b.from,
                        to: b.to,
                        isSequential: false,
                        branchIndex: idx
                    });
                }
            });

            // Map sequential chains
            flowChains.forEach((chain) => {
                chain.forEach((step) => {
                    const l = findLink(step.from, step.to);
                    if (l) {
                        activeFlowLinkMap.set(l, {
                            type: step.type || 'primary',
                            bidirectional: false,
                            from: step.from,
                            to: step.to,
                            isSequential: true
                        });
                    }
                });
            });
        }

        const hoveredNeighbors = new Set();
        const hoveredLinks = new Set();
        if (hoveredNode && !selectedNode) {
            hoveredNeighbors.add(hoveredNode.id);
            links.forEach((l) => {
                // When hovering a skill, highlight genuine connections (exclude hub link to TOOLKIT)
                if (!hoveredNode.isHub && l.type === 'hub') return;
                if (l.sourceNode === hoveredNode || l.targetNode === hoveredNode) {
                    hoveredLinks.add(l);
                    hoveredNeighbors.add(l.sourceNode.id);
                    hoveredNeighbors.add(l.targetNode.id);
                }
            });
        }

        // 1. Draw Synaptic Links
        links.forEach((link) => {
            const s = link.sourceNode;
            const t = link.targetNode;
            if (!s || !t) return;

            const isFilterActive = activeFilter === 'all' || s.cluster === activeFilter || t.cluster === activeFilter || s.isHub || t.isHub;

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(t.x, t.y);

            if (selectedNode) {
                // Active workflow link check
                if (activeFlowLinkMap.has(link)) {
                    const flow = activeFlowLinkMap.get(link);
                    ctx.strokeStyle = selectedNode.color || '#ffe54c';
                    if (flow.type === 'primary') {
                        ctx.lineWidth = 3.5;
                        ctx.setLineDash([]);
                        ctx.globalAlpha = 1.0;
                    } else if (flow.type === 'supporting') {
                        ctx.lineWidth = 2.4;
                        ctx.setLineDash([6, 4]);
                        ctx.globalAlpha = 0.85;
                    } else if (flow.type === 'optional') {
                        // Optional connections visually distinguishable with distinct dotted line
                        ctx.lineWidth = 2.0;
                        ctx.setLineDash([3, 4]);
                        ctx.globalAlpha = 0.75;
                    } else {
                        ctx.lineWidth = 2.2;
                        ctx.setLineDash([4, 4]);
                        ctx.globalAlpha = 0.80;
                    }
                } else if (link.type === 'hub') {
                    // Central anchor hub line: remains subtle dashed structural line, NEVER active workflow
                    ctx.strokeStyle = currentInk;
                    ctx.lineWidth = 1.2;
                    ctx.setLineDash([5, 5]);
                    ctx.globalAlpha = 0.08;
                } else {
                    // Dimmed link
                    ctx.strokeStyle = currentInk;
                    ctx.lineWidth = 1;
                    ctx.setLineDash([4, 4]);
                    ctx.globalAlpha = 0.04;
                }
            } else if (hoveredNode) {
                // Hover preview
                if (hoveredLinks.has(link)) {
                    ctx.strokeStyle = hoveredNode.color || currentInk;
                    ctx.lineWidth = link.type === 'primary' ? 3.2 : 2.4;
                    ctx.setLineDash(link.type === 'primary' ? [] : (link.type === 'optional' ? [3, 4] : [5, 4]));
                    ctx.globalAlpha = 1.0;
                } else {
                    ctx.strokeStyle = currentInk;
                    ctx.lineWidth = 1;
                    ctx.setLineDash([4, 4]);
                    ctx.globalAlpha = 0.05;
                }
            } else {
                // Default view
                if (isFilterActive) {
                    ctx.strokeStyle = currentInk;
                    if (link.type === 'hub') {
                        ctx.lineWidth = 1.6;
                        ctx.setLineDash([5, 5]);
                        ctx.globalAlpha = 0.28;
                    } else if (link.type === 'primary') {
                        ctx.lineWidth = 1.8;
                        ctx.setLineDash([6, 6]);
                        ctx.globalAlpha = 0.22;
                    } else if (link.type === 'supporting') {
                        ctx.lineWidth = 1.3;
                        ctx.setLineDash([4, 6]);
                        ctx.globalAlpha = 0.16;
                    } else if (link.type === 'optional') {
                        ctx.lineWidth = 1.2;
                        ctx.setLineDash([2, 5]);
                        ctx.globalAlpha = 0.12;
                    } else {
                        ctx.lineWidth = 1.4;
                        ctx.setLineDash([4, 4]);
                        ctx.globalAlpha = 0.16;
                    }
                } else {
                    ctx.strokeStyle = currentInk;
                    ctx.lineWidth = 1;
                    ctx.setLineDash([4, 4]);
                    ctx.globalAlpha = 0.04;
                }
            }
            ctx.stroke();
            ctx.restore();
        });

        // 2. Draw Synaptic Photons & Animated Workflow Pulses
        if (selectedNode) {
            // A. Animate Sequential Chains in Order
            if (flowChains.length > 0) {
                flowChains.forEach((chain) => {
                    const chainLen = chain.length;
                    const stepDuration = 0.85; // seconds per sequential step
                    const totalDuration = chainLen * stepDuration;
                    const cycleTime = now % totalDuration;
                    const currentStepIdx = Math.floor(cycleTime / stepDuration);
                    const stepProg = (cycleTime % stepDuration) / stepDuration;

                    const activeStep = chain[currentStepIdx];
                    if (activeStep) {
                        const fromN = nodeMap.get(activeStep.from);
                        const toN = nodeMap.get(activeStep.to);
                        if (fromN && toN) {
                            const px = fromN.x + (toN.x - fromN.x) * stepProg;
                            const py = fromN.y + (toN.y - fromN.y) * stepProg;
                            const isOpt = activeStep.type === 'optional';

                            ctx.save();
                            // Outer glowing halo
                            ctx.beginPath();
                            ctx.arc(px, py, isOpt ? 6 : 8.5, 0, Math.PI * 2);
                            ctx.fillStyle = selectedNode.color || '#ffe54c';
                            ctx.globalAlpha = isOpt ? 0.25 : 0.40;
                            ctx.fill();

                            // Inner core photon
                            ctx.beginPath();
                            ctx.arc(px, py, isOpt ? 3.2 : 4.5, 0, Math.PI * 2);
                            ctx.fillStyle = isOpt ? '#ffffff' : (selectedNode.color || '#ffe54c');
                            ctx.globalAlpha = 1.0;
                            ctx.fill();
                            ctx.restore();
                        }
                    }
                });
            }

            // B. Animate Parallel Branches Simultaneously
            if (flowBranches.length > 0) {
                flowBranches.forEach((branch, idx) => {
                    const fromN = nodeMap.get(branch.from);
                    const toN = nodeMap.get(branch.to);
                    if (fromN && toN) {
                        const prog = branch.bidirectional
                            ? (now * 0.75 + idx * 0.2) % 1
                            : (now * 0.85 + idx * 0.16) % 1;

                        const px = fromN.x + (toN.x - fromN.x) * prog;
                        const py = fromN.y + (toN.y - fromN.y) * prog;
                        const isOpt = branch.type === 'optional';
                        const isSupp = branch.type === 'supporting';

                        ctx.save();
                        // Outer glowing halo
                        ctx.beginPath();
                        ctx.arc(px, py, isOpt ? 5.5 : (isSupp ? 6.5 : 8), 0, Math.PI * 2);
                        ctx.fillStyle = selectedNode.color || '#ffe54c';
                        ctx.globalAlpha = isOpt ? 0.25 : 0.35;
                        ctx.fill();

                        // Inner core particle
                        ctx.beginPath();
                        ctx.arc(px, py, isOpt ? 3.0 : (isSupp ? 3.8 : 4.4), 0, Math.PI * 2);
                        ctx.fillStyle = isOpt ? '#ffffff' : (selectedNode.color || '#ffe54c');
                        ctx.globalAlpha = 1.0;
                        ctx.fill();
                        ctx.restore();
                    }
                });
            }
        } else if (hoveredNode) {
            // Hover preview photons along hovered links
            links.forEach((link) => {
                if (hoveredLinks.has(link)) {
                    const s = link.sourceNode;
                    const t = link.targetNode;
                    if (!s || !t) return;
                    const px = s.x + (t.x - s.x) * link.photonProg;
                    const py = s.y + (t.y - s.y) * link.photonProg;

                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(px, py, 4.2, 0, Math.PI * 2);
                    ctx.fillStyle = hoveredNode.color || '#161616';
                    ctx.globalAlpha = 1.0;
                    ctx.fill();
                    ctx.restore();
                }
            });
        } else {
            // Default ambient photons along active links (exclude hub links)
            links.forEach((link) => {
                const s = link.sourceNode;
                const t = link.targetNode;
                if (!s || !t) return;
                const isFilterActive = activeFilter === 'all' || s.cluster === activeFilter || t.cluster === activeFilter;

                if (isFilterActive && link.type !== 'hub') {
                    const px = s.x + (t.x - s.x) * link.photonProg;
                    const py = s.y + (t.y - s.y) * link.photonProg;

                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(px, py, 2.8, 0, Math.PI * 2);
                    ctx.fillStyle = '#161616';
                    ctx.globalAlpha = 0.55;
                    ctx.fill();
                    ctx.restore();
                }
            });
        }

        // 3. Draw Nodes with Central Anchor & Dimming Support
        nodes.forEach((node) => {
            const isSelected = selectedNode && node.id === selectedNode.id;
            const isHovered = hoveredNode && node.id === hoveredNode.id;

            let isDimmed = false;
            if (node.isHub || node.id === 'core') {
                isDimmed = false; // Central TOOLKIT anchor stays 100% visible at all times!
            } else if (selectedNode) {
                isDimmed = !illuminatedSet.has(node.id); // Dim unrelated nodes
            } else if (hoveredNode) {
                isDimmed = !hoveredNeighbors.has(node.id);
            } else {
                if (node.isHub) {
                    isDimmed = false;
                } else {
                    isDimmed = activeFilter !== 'all' && node.cluster !== activeFilter;
                }
            }

            ctx.save();
            ctx.globalAlpha = isDimmed ? 0.14 : 1.0;

            const drawX = Math.round((isSelected || isHovered) ? node.x - 3 : node.x);
            const drawY = Math.round((isSelected || isHovered) ? node.y - 3 : node.y);
            const shadowOff = isSelected ? 6.5 : (isHovered ? 5.0 : 3.5);
            const drawRadius = isSelected ? node.radius + 3 : (isHovered ? node.radius + 2 : node.radius);

            if (node.isHub) {
                // --- Central TOOLKIT Node: Iconic Yellow Circle & Clean Centered Text ---
                if (isSelected || isHovered) {
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(drawX, drawY, drawRadius + 7, 0, Math.PI * 2);
                    ctx.strokeStyle = '#ffe54c';
                    ctx.lineWidth = 2.5;
                    ctx.setLineDash([5, 5]);
                    ctx.stroke();
                    ctx.restore();
                }

                // Circle Hard Shadow
                ctx.fillStyle = currentInk;
                ctx.beginPath();
                ctx.arc(drawX + shadowOff, drawY + shadowOff, drawRadius, 0, Math.PI * 2);
                ctx.fill();

                // Circle Body (Iconic Yellow)
                ctx.fillStyle = '#ffe54c';
                ctx.beginPath();
                ctx.arc(drawX, drawY, drawRadius, 0, Math.PI * 2);
                ctx.fill();

                // Circle Ink Border
                ctx.lineWidth = 3.5;
                ctx.strokeStyle = currentInk;
                ctx.stroke();

                // Code Bracket Icon </>
                const hubImg = loadedImages.core;
                if (hubImg && hubImg.complete) {
                    const iconSize = 24;
                    ctx.drawImage(hubImg, Math.round(drawX - iconSize / 2), Math.round(drawY - iconSize / 2 - 5), iconSize, iconSize);
                } else {
                    ctx.fillStyle = '#161616';
                    ctx.font = 'bold 15px JetBrains Mono, monospace';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText('</>', drawX, drawY - 5);
                }

                // TOOLKIT Text inside Circle
                ctx.fillStyle = '#161616';
                ctx.font = 'bold 9.5px Archivo Black, sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('TOOLKIT', drawX, drawY + 12);
            } else {
                // --- Standard Skill Node: Circle with Official Logo + Pill Tag Below ---
                if (isSelected) {
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(drawX, drawY, drawRadius + 7, 0, Math.PI * 2);
                    ctx.strokeStyle = node.color;
                    ctx.lineWidth = 2.5;
                    ctx.setLineDash([5, 5]);
                    ctx.stroke();
                    ctx.restore();
                }

                // Circle Hard Shadow
                ctx.fillStyle = currentInk;
                ctx.beginPath();
                ctx.arc(drawX + shadowOff, drawY + shadowOff, drawRadius, 0, Math.PI * 2);
                ctx.fill();

                // Circle Body
                ctx.fillStyle = currentPaper;
                ctx.beginPath();
                ctx.arc(drawX, drawY, drawRadius, 0, Math.PI * 2);
                ctx.fill();

                // Circle Ink Border
                ctx.lineWidth = isSelected ? 3.5 : (isHovered ? 3 : 2.5);
                ctx.strokeStyle = currentInk;
                ctx.stroke();

                // Draw Official Vector SVG Logo inside Circle
                const logoImg = loadedImages[node.id];
                if (logoImg && logoImg.complete) {
                    const iconSize = isSelected ? 28 : (node.isSubHub ? 26 : 24);
                    ctx.drawImage(logoImg, Math.round(drawX - iconSize / 2), Math.round(drawY - iconSize / 2), iconSize, iconSize);
                }

                // Dedicated Neobrutalist Label Pill Tag BELOW Circle (ZERO TEXT OVERFLOW)
                ctx.font = isSelected 
                    ? 'bold 10.5px Archivo Black, sans-serif'
                    : (node.isSubHub ? 'bold 10px Archivo Black, sans-serif' : 'bold 9.5px DM Mono, monospace');

                const textWidth = ctx.measureText(node.label).width;
                const pillW = Math.round(textWidth + 14);
                const pillH = 18;
                const pillX = Math.round(drawX - pillW / 2);
                const pillY = Math.round(drawY + drawRadius + 5);

                // Pill Tag Hard Shadow
                ctx.fillStyle = currentInk;
                drawRoundRect(ctx, pillX + 2, pillY + 2, pillW, pillH, 4);
                ctx.fill();

                // Pill Tag Body
                ctx.fillStyle = isSelected ? node.color : (isHovered ? node.color : currentPaper);
                drawRoundRect(ctx, pillX, pillY, pillW, pillH, 4);
                ctx.fill();

                // Pill Tag Ink Border
                ctx.lineWidth = 1.5;
                ctx.strokeStyle = currentInk;
                ctx.stroke();

                // Pill Tag Text
                ctx.fillStyle = (isSelected || isHovered) ? '#161616' : currentInk;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(node.label, drawX, Math.round(pillY + pillH / 2));
            }

            ctx.restore();
        });
    }

    // Animation Loop with Viewport Culling
    function loop() {
        if (!isVisible) {
            animFrameId = null;
            return;
        }
        updatePhysics();
        draw();
        animFrameId = requestAnimationFrame(loop);
    }

    // Intersection Observer to Pause RAF when offscreen
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                isVisible = entry.isIntersecting;
                if (isVisible && !animFrameId) {
                    animFrameId = requestAnimationFrame(loop);
                }
            });
        }, { threshold: 0.05 });
        observer.observe(wrap);
    }

    // Exact Hit Testing (Circle + Pill Tag Below)
    function getNodeAt(x, y) {
        for (let i = nodes.length - 1; i >= 0; i--) {
            const node = nodes[i];
            const isSelected = selectedNodeId === node.id;
            const testRadius = isSelected ? node.radius + 6 : node.radius + 4;

            // 1. Circle Hit Test
            if (Math.hypot(node.x - x, node.y - y) <= testRadius) {
                return node;
            }

            // 2. Exact Pill Tag Hit Test (only non-hub nodes have pills)
            if (!node.isHub) {
                ctx.font = node.isSubHub ? 'bold 10px Archivo Black, sans-serif' : 'bold 9.5px DM Mono, monospace';
                const textWidth = ctx.measureText(node.label).width;
                const pillW = textWidth + 14;
                const pillH = 18;
                const pillX = node.x - pillW / 2;
                const pillY = node.y + node.radius + 5;

                if (x >= pillX && x <= pillX + pillW && y >= pillY && y <= pillY + pillH) {
                    return node;
                }
            }
        }
        return null;
    }

    // Update Floating HUD Card (Lightweight Preview on Hover)
    function updateFloatingHud(node) {
        if (!hudBadge || !hudTitle || !hudDesc) return;

        if (node) {
            hudBadge.textContent = (node.clusterName || 'Skill').toUpperCase();
            hudBadge.style.background = node.color || '#ffe54c';
            hudTitle.textContent = node.name || node.label;
            hudDesc.textContent = node.shortDescription || (node.isHub ? 'Central developer toolkit anchor' : 'Connected skill in ecosystem');
            return;
        }

        const selectedNode = selectedNodeId ? nodes.find(n => n.id === selectedNodeId) : null;
        if (selectedNode) {
            hudBadge.textContent = 'ACTIVE SKILL';
            hudBadge.style.background = selectedNode.color;
            hudTitle.textContent = selectedNode.name;
            hudDesc.textContent = 'Exploring workflow details below • Click TOOLKIT to reset';
        } else {
            hudBadge.textContent = 'ECOSYSTEM';
            hudBadge.style.background = '#ffe54c';
            hudTitle.textContent = 'Tech Toolkit';
            hudDesc.textContent = '15 connected technologies';
        }
    }

    // Render Dedicated Workflow Exploration Panel Below Canvas (Opens only on skill selection)
    function renderWorkflowPanel(shouldScroll = false) {
        if (!workflowPanel) return;

        if (!selectedNodeId) {
            // Remove ecosystem overview block when no node is selected
            workflowPanel.innerHTML = '';
            workflowPanel.style.display = 'none';
            return;
        }

        // Active Skill Details View
        workflowPanel.style.display = 'block';
        const skill = db.getSkill(selectedNodeId);
        if (!skill) return;

        const relationships = db.getRelationshipsFor(selectedNodeId);

        workflowPanel.innerHTML = `
            <div class="workflow-active-state">
                <!-- Header -->
                <div class="workflow-header">
                    <div class="workflow-header-left">
                        <div class="workflow-icon-bubble" style="box-shadow: 4px 4px 0 var(--ink);">
                            ${skill.icon}
                        </div>
                        <div class="workflow-title-meta">
                            <div class="workflow-title-row">
                                <h3 class="workflow-skill-title">${skill.name}</h3>
                                <span class="workflow-category-pill" style="background: ${skill.color};">
                                    ${skill.clusterName}
                                </span>
                                <span class="workflow-category-pill" style="background: var(--paper-warm);">
                                    ${skill.category}
                                </span>
                            </div>
                            <p class="workflow-short-desc">${skill.shortDescription}</p>
                        </div>
                    </div>

                    <button class="workflow-close-btn" id="workflow-close-btn" type="button" title="Deselect Skill">
                        ✕ Deselect
                    </button>
                </div>

                <!-- Two-Column Facts Grid -->
                <div class="workflow-facts-grid">
                    <div class="workflow-fact-card">
                        <span class="workflow-fact-badge">WHAT IT'S USED FOR</span>
                        <p class="workflow-fact-content">${skill.whatItsUsedFor}</p>
                    </div>
                    <div class="workflow-fact-card">
                        <span class="workflow-fact-badge">PRACTICAL REAL-WORLD EXAMPLE</span>
                        <p class="workflow-fact-content">${skill.practicalExample}</p>
                    </div>
                </div>

                <!-- Connected Technologies & Technical Roles -->
                <div class="workflow-connections-section">
                    <h4 class="workflow-section-title">
                        Connected Technologies & Roles
                        <span class="workflow-section-count">${relationships.length}</span>
                    </h4>
                    <div class="workflow-connected-grid">
                        ${relationships.map(r => {
                            const otherId = r.source === skill.id ? r.target : r.source;
                            const otherSkill = db.getSkill(otherId);
                            if (!otherSkill) return '';

                            return `
                                <div class="workflow-conn-card" data-skill-id="${otherSkill.id}" title="Click to inspect ${otherSkill.name}">
                                    <div class="workflow-conn-header">
                                        <div class="workflow-conn-target">
                                            ${otherSkill.icon}
                                            <span class="workflow-conn-target-name">${otherSkill.name}</span>
                                        </div>
                                        <span class="workflow-conn-type-badge ${r.type}">
                                            ${r.type}
                                        </span>
                                    </div>
                                    <p class="workflow-conn-desc">${r.description}</p>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- Step-by-Step Practical Workflow -->
                <div class="workflow-stepper-section">
                    <h4 class="workflow-section-title">
                        ${skill.name} Engineering Workflow
                        <span class="workflow-section-count">${skill.workflow.length} Steps</span>
                    </h4>

                    <div class="workflow-steps-timeline">
                        ${skill.workflow.map(step => `
                            <div class="workflow-step-item">
                                <div class="workflow-step-num">${String(step.step).padStart(2, '0')}</div>
                                <div class="workflow-step-body">
                                    <div class="workflow-step-top">
                                        <h5 class="workflow-step-title">${step.title}</h5>
                                        <span class="workflow-step-type-pill ${step.type}">${step.type}</span>
                                    </div>
                                    <p class="workflow-step-text">${step.explanation}</p>

                                    <div class="workflow-step-tags">
                                        ${step.highlightTerms.map(term => `
                                            <span class="workflow-term-tag">${term}</span>
                                        `).join('')}

                                        ${step.connectedTools.map(tId => {
                                            const tool = db.getSkill(tId);
                                            return tool ? `
                                                <button class="workflow-tool-tag" type="button" data-skill-id="${tool.id}" title="Jump to ${tool.name}">
                                                    ${tool.name}
                                                </button>
                                            ` : '';
                                        }).join('')}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        // Attach event listener to close button
        const closeBtn = document.getElementById('workflow-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                selectSkill(null);
            });
        }

        // Attach event listeners to connected tool cards
        workflowPanel.querySelectorAll('.workflow-conn-card').forEach((card) => {
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                selectSkill(card.dataset.skillId, true);
            });
        });

        // Attach event listeners to workflow step tool tags
        workflowPanel.querySelectorAll('.workflow-tool-tag').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                selectSkill(btn.dataset.skillId, true);
            });
        });

        if (shouldScroll) {
            workflowPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    // Central Skill Selection Controller
    function selectSkill(skillId, shouldScroll = false) {
        if (!skillId || skillId === selectedNodeId || skillId === 'core') {
            selectedNodeId = null;
        } else {
            selectedNodeId = skillId;
        }

        updateFloatingHud(null);
        renderWorkflowPanel(shouldScroll);
    }

    // Expose selectSkill globally for interactive buttons and breadcrumbs
    window.selectSkill = selectSkill;

    // Pointer Events: Drag & Lightweight Hover & Clean Click Disambiguation
    canvas.addEventListener('pointerdown', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        downX = mouseX;
        downY = mouseY;
        hasMoved = false;

        const target = getNodeAt(mouseX, mouseY);
        if (target) {
            draggedNode = target;
            draggedNode.fx = mouseX;
            draggedNode.fy = mouseY;
            try {
                canvas.setPointerCapture(e.pointerId);
            } catch (err) {}
        }
    });

    canvas.addEventListener('pointermove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;

        if (Math.hypot(mouseX - downX, mouseY - downY) > 6) {
            hasMoved = true;
        }

        if (draggedNode) {
            draggedNode.fx = mouseX;
            draggedNode.fy = mouseY;
        } else {
            const target = getNodeAt(mouseX, mouseY);
            if (target !== hoveredNode) {
                hoveredNode = target;
                canvas.style.cursor = target ? 'pointer' : 'grab';
                updateFloatingHud(hoveredNode);
            }
        }
    });

    function handlePointerUp(e) {
        if (!hasMoved) {
            // Clean Click Disambiguation
            const target = getNodeAt(mouseX, mouseY);
            if (target) {
                if (target.isHub || target.id === 'core') {
                    // Clicking TOOLKIT restores overall ecosystem overview
                    selectSkill(null);
                } else {
                    selectSkill(target.id, true);
                }
            } else {
                // Clicked on empty canvas space clears selection
                if (selectedNodeId) {
                    selectSkill(null);
                }
            }
        }

        if (draggedNode) {
            draggedNode.fx = null;
            draggedNode.fy = null;
            draggedNode = null;
        }

        if (e && e.pointerId) {
            try {
                canvas.releasePointerCapture(e.pointerId);
            } catch (err) {}
        }
    }

    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointercancel', handlePointerUp);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    canvas.addEventListener('pointerleave', () => {
        if (!draggedNode) {
            hoveredNode = null;
            updateFloatingHud(null);
        }
    });

    // Reset Button
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            selectedNodeId = null;
            hoveredNode = null;
            draggedNode = null;
            activeFilter = 'all';

            // Reset filter buttons active & aria-selected
            filterBtns.forEach((b) => {
                const isAll = b.dataset.filter === 'all';
                b.classList.toggle('active', isAll);
                b.setAttribute('aria-selected', isAll ? 'true' : 'false');
            });

            initPositions();
            updateFloatingHud(null);
            renderWorkflowPanel(false);
        });
    }

    // Category Filter Buttons
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            filterBtns.forEach((b) => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            activeFilter = btn.dataset.filter;

            // If selected node is filtered out, clear selection cleanly
            if (selectedNodeId) {
                const selNode = nodes.find(n => n.id === selectedNodeId);
                if (selNode && !selNode.isHub && activeFilter !== 'all' && selNode.cluster !== activeFilter) {
                    selectSkill(null);
                }
            }
        });
    });

    // Keyboard Accessibility: Escape key clears selection
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && selectedNodeId) {
            selectSkill(null);
        }
    });

    // Initialize
    resize();
    window.addEventListener('resize', resize);
    renderWorkflowPanel(false);
    animFrameId = requestAnimationFrame(loop);
})();
// --- Background Visuals (Matrix + Three.js) ---
if (container) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '0';
    container.appendChild(canvas);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '1';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Outer Sphere
    const geometryOuter = new THREE.IcosahedronGeometry(2.2, 1);
    const materialOuter = new THREE.MeshBasicMaterial({ 
        color: 0x00ff88,
        wireframe: true,
        transparent: true,
        opacity: 0.15
    });
    const sphereOuter = new THREE.Mesh(geometryOuter, materialOuter);
    scene.add(sphereOuter);

    // Inner Sphere
    const geometryInner = new THREE.OctahedronGeometry(1.2, 0);
    const materialInner = new THREE.MeshBasicMaterial({ 
        color: 0x00d4ff,
        wireframe: true,
        transparent: true,
        opacity: 0.4
    });
    const sphereInner = new THREE.Mesh(geometryInner, materialInner);
    scene.add(sphereInner);

    // Particles
    const particlesGeo = new THREE.BufferGeometry();
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 15;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
        size: 0.02,
        color: 0xffffff,
        transparent: true,
        opacity: 0.5
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);
    
    // Matrix Vars
    const fontSize = 14;
    const fontFamily = 'JetBrains Mono, monospace'; 
    let columns = 0;
    let drops = [];
    let mouseX = 0;
    let mouseY = 0;
    let windowHalfX = window.innerWidth / 2;                      
    let windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = Math.floor(canvas.width / fontSize);
        drops = [];
        for (let i = 0; i < columns; i++) { drops[i] = 1; }
        
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = "01010101"; 

    function animate() {
        ctx.fillStyle = "rgba(13, 17, 23, 0.05)"; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#238636"; 
        ctx.font = `${fontSize}px ${fontFamily}`;

        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }

        const time = Date.now() * 0.001;
        sphereOuter.rotation.y = (time * 0.2) + (mouseX * 0.001);
        sphereOuter.rotation.x = (time * 0.1) + (mouseY * 0.001);
        sphereInner.rotation.y = (time * -0.5) + (mouseX * 0.001);
        sphereInner.rotation.x = (time * -0.2) + (mouseY * 0.001);
        particlesMesh.rotation.y = (time * 0.05) + (mouseX * 0.0005);
        particlesMesh.rotation.x = (mouseY * 0.0005);
        
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
}

// --- Project Data ---
const projectData = {
    "collab": {
        title: "VIT Collab Hub", 
        tech: ["HTML", "CSS", "JS", "Firebase"],
        fullDesc: "VIT Collab Hub connects students through emails, offering a comprehensive suite for project collaboration. Users can create detailed profiles, recruit team members, and manage workflows using a drag-and-drop Taskboard. The platform features real-time chat for seamless communication and a project discovery section to explore and join public projects, fostering a collaborative environment for students to innovate together. The website is live with use of firebase hosting.",
        links: { live: "#", repo: "#" },
        images: [
            { src: "main(vitcollabhub).png", title: "Main Page", desc: "Home Page,Where you have option like features ,how the apllication works,contact" },
            { src: "login(vitcollabhub).png", title: "Login page", desc: "Sign up or Login into our website" },
            { src: "profilesetup(vitcollabhub).png", title: "Profile set up", desc: "When you login first time you have to set up your profile for further use,It includes your Name,Registration number,Block,bio and also show case your project through github links" },
            { src: "dashboard(1-vitcollabhub).png", title: "Dashboard", desc: "Here you can start to create the project,Have option to browse members,edit/view your profile,logout,view your recent message conversations chatbox" },
            { src: "dashboard(2-vitcollabhub).png", title: "Dashboard", desc: "Under create your project you can see your created project,Enrolled project,Public/available projects" },
            { src: "yourproject.png", title: "Your project", desc: "When you create your project you can view the option like join request where you can accept the external requests,Delete project,view members" },
            { src: "teamchat(vitcollabhub).png", title: "Teamchat", desc: "Here you can chat with your teammembers" },
            { src: "Taskmanager(vitcollabhub).png", title: "Taskmanager", desc: "You can add your task,add to in progress and done box,but when you add the task to done box you have to add your github link for the same task" },
            { src: "publicproject(vitcollabhub).png", title: "Public project", desc: "You can send request to the creator to contribute also you can see the team members" },
            { src: "lockedchat(vitcollabhub).png", title: "Locked Groupchat", desc: "When you are not the part of the project you can't access the teamchat option" },
            { src: "Browsemembers(vitcollabhub).png", title: "Browse members", desc: "You can browse the members where you can access their profiles" },
            { src: "otherprofile(vitcollabhub).png", title: "Other's profile", desc: "Access other's profile , you can also send Dm to their chatbox" },
            { src: "dm(vitcollabhub).png", title: "Direct message", desc: "Setup your conversation with one to one chat feature" }
        ]
    },
    "weather": {
        title: "Weather App",
        tech: ["Python", "PyQt5", "API"],
        fullDesc: "A desktop application that fetches real-time weather data. Built with Python and PyQt5 for a native OS feel.",
        links: { live: "#", repo: "#" },
        images: [
            { src: "Weather(weather).png", title: "Main Interface", desc: "Clean UI showing temperature and conditions." },
            { src: "error(weather).png", title: "Error handling", desc: "Shows error when city is not found,similarly every possible error is handled" }
        ]
    }
};

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');
    const track = document.getElementById('sliderTrack');

    if (projectId && projectData[projectId] && track) {
        showSkeletonLoader();
        setTimeout(() => {
            loadProjectDetails(projectId);
        }, 1500); 
    }

    initInteractions();
    initTerminal();
    initThemeSwitcher();
    initDraggableStickers();
    initInkDoodler();
    initCharacterAvatar();
});

// ==========================================================================
// 13. FULL-PAGE INTERACTIVE BLUE INK DOODLE CANVAS ("CURSOR IS INK")
// ==========================================================================
function initInkDoodler() {
    const canvas = document.getElementById('inkCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let doodleEnabled = true;
    let activeStroke = [];
    let allStrokes = [];

    function resizeCanvas() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        canvas.width = width;
        canvas.height = height;

        redrawAllStrokes();
    }

    function redrawAllStrokes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        allStrokes.forEach(stroke => {
            if (stroke.length < 2) return;
            drawStroke(stroke);
        });
    }

    function drawStroke(points) {
        if (points.length < 2) return;
        ctx.strokeStyle = '#104bb8'; // Authentic blue ballpoint ink
        ctx.lineWidth = 3.2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length; i++) {
            const p1 = points[i - 1];
            const p2 = points[i];
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2;
            ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
        }
        ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
        ctx.stroke();
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Initial playful doodle line (top-left curl from user's screenshot)
    function drawWelcomeDoodle() {
        const isSketch = document.documentElement.getAttribute('data-theme') === 'sketch';
        if (!isSketch || allStrokes.length > 0) return;

        const welcomePath = [
            { x: 34, y: 125 },
            { x: 65, y: 145 },
            { x: 125, y: 185 },
            { x: 185, y: 220 },
            { x: 235, y: 248 }
        ];
        allStrokes.push(welcomePath);
        drawStroke(welcomePath);
    }
    window.triggerWelcomeDoodle = drawWelcomeDoodle;
    setTimeout(drawWelcomeDoodle, 400);

    // Pointer events for ultra-smooth cross-device ink drawing
    function startDrawing(e) {
        const isSketch = document.documentElement.getAttribute('data-theme') === 'sketch';
        if (!isSketch || !doodleEnabled) return;
        
        // Prevent drawing on interactive UI elements so buttons, links, inputs work perfectly
        const target = e.target;
        if (target.closest('a, button, input, textarea, select, .terminal-window, .blueprint-modal, #notebook-character')) {
            return;
        }

        isDrawing = true;
        const x = e.clientX;
        const y = e.clientY;
        activeStroke = [{ x, y }];
    }

    function continueDrawing(e) {
        if (!isDrawing) return;
        const x = e.clientX;
        const y = e.clientY;
        activeStroke.push({ x, y });

        // Draw incremental segment
        if (activeStroke.length >= 2) {
            ctx.strokeStyle = '#104bb8';
            ctx.lineWidth = 3.2;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            const len = activeStroke.length;
            const p1 = activeStroke[len - 2];
            const p2 = activeStroke[len - 1];
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
        }
    }

    function endDrawing() {
        if (!isDrawing) return;
        isDrawing = false;
        if (activeStroke.length > 1) {
            allStrokes.push([...activeStroke]);
        }
        activeStroke = [];
        redrawAllStrokes(); // Smoothes with quadratic curves on stroke finish!
    }

    window.addEventListener('pointerdown', startDrawing);
    window.addEventListener('pointermove', continueDrawing);
    window.addEventListener('pointerup', endDrawing);
    window.addEventListener('pointercancel', endDrawing);

    // Floating Doodle Toolbar
    const penBtn = document.getElementById('doodlePenBtn');
    const eraseBtn = document.getElementById('doodleEraseBtn');

    if (penBtn) {
        const isSketch = document.documentElement.getAttribute('data-theme') === 'sketch';
        if (isSketch) document.body.classList.add('pen-cursor-active');

        penBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            doodleEnabled = !doodleEnabled;
            penBtn.classList.toggle('active', doodleEnabled);
            document.body.classList.toggle('pen-cursor-active', doodleEnabled);
        });
    }

    if (eraseBtn) {
        eraseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            allStrokes = [];
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            eraseBtn.style.transform = 'scale(0.9)';
            setTimeout(() => eraseBtn.style.transform = '', 150);
        });
    }
}

// ==========================================================================
// 14. INTERACTIVE HAND-DRAWN AVATAR CHARACTER ("CLICK MY FACE")
// ==========================================================================
function initCharacterAvatar() {
    const char = document.getElementById('notebook-character');
    const bubble = document.getElementById('notebook-speech-bubble');
    const bubbleText = document.getElementById('speech-bubble-text');
    if (!char) return;

    const quotes = [
        "Hi! Try scribbling on my page with your mouse! ✏️",
        "I build things for the web & grind DSA! ⚡",
        "2nd-year CSE student @ VIT Vellore 🎓",
        "Don't worry, the erase button cleans up the ink! 😉",
        "opsst... you found the interactive face! ✨",
        "Catch me playing Valorant or watching anime! 🎮"
    ];
    let quoteIndex = 0;
    let bubbleTimeout = null;

    char.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Rotate quotes
        quoteIndex = (quoteIndex + 1) % quotes.length;
        if (bubbleText) bubbleText.textContent = quotes[quoteIndex];

        // Animate speech bubble
        if (bubble) {
            bubble.classList.add('active');
            clearTimeout(bubbleTimeout);
            bubbleTimeout = setTimeout(() => {
                bubble.classList.remove('active');
            }, 3200);
        }

        // Playful eye wink animation
        const eyes = document.getElementById('character-eyes');
        const mouth = document.getElementById('character-mouth');
        if (eyes) {
            eyes.innerHTML = '<path d="M116 125 Q122 120 128 125" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/><circle cx="164" cy="125" r="4.5" fill="var(--ink)"/>';
            setTimeout(() => {
                eyes.innerHTML = '<circle class="ink-eye" cx="122" cy="125" r="4.5" fill="var(--ink)"/><circle class="ink-eye" cx="164" cy="125" r="4.5" fill="var(--ink)"/>';
            }, 800);
        }
        if (mouth) {
            mouth.setAttribute('d', 'M130 143 Q143 158 156 143');
            setTimeout(() => {
                mouth.setAttribute('d', 'M134 145 Q143 154 152 145');
            }, 800);
        }
    });

    char.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            char.click();
        }
    });
}

function showSkeletonLoader() {
    const titleEl = document.getElementById('project-title');
    if(titleEl) titleEl.innerHTML = '<span class="skeleton skeleton-title"></span>';

    const techContainer = document.getElementById('project-tech');
    if(techContainer) techContainer.innerHTML = `<span class="skeleton skeleton-chip"></span><span class="skeleton skeleton-chip"></span><span class="skeleton skeleton-chip"></span>`;

    const descEl = document.getElementById('project-full-desc');
    if(descEl) descEl.innerHTML = `<span class="skeleton skeleton-text"></span><span class="skeleton skeleton-text"></span><span class="skeleton skeleton-text"></span><span class="skeleton skeleton-text" style="width: 80%"></span>`;

    const track = document.getElementById('sliderTrack');
    if(track) track.innerHTML = '<div class="skeleton skeleton-box"></div>';
}

function loadProjectDetails(id) {
    const data = projectData[id];
    
    const titleEl = document.getElementById('project-title');
    const descEl = document.getElementById('project-full-desc');

    if(titleEl) titleEl.innerText = data.title;
    if(descEl) descEl.innerText = data.fullDesc;
    
    const liveBtn = document.getElementById('live-link');
    const repoBtn = document.getElementById('repo-link');
    if(liveBtn) {
        if (data.links.live !== "#") liveBtn.href = data.links.live;
        else liveBtn.style.display = 'none';
    }
    if(repoBtn) repoBtn.href = data.links.repo;

    const techContainer = document.getElementById('project-tech');
    if(techContainer) {
        techContainer.innerHTML = '';
        data.tech.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.innerText = tech;
            techContainer.appendChild(tag);
        });
    }

    const track = document.getElementById('sliderTrack');
    if(track) {
        track.innerHTML = ''; 
        data.images.forEach((imgData, index) => {
            const img = document.createElement('img');
            img.src = imgData.src;
            img.className = 'slide';
            img.setAttribute('data-title', imgData.title);
            img.setAttribute('data-desc', imgData.desc);
            track.appendChild(img);
        });
        initSlider();
    }
}

function initSlider() {
    const track = document.getElementById('sliderTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('sliderDots');
    const slideTitle = document.getElementById('slide-title');
    const slideDesc = document.getElementById('slide-desc');

    if (!track) return;

    setTimeout(() => {
        const slides = Array.from(track.children);
        if (slides.length === 0) return;

        let currentIndex = 0;

        if(dotsContainer) {
            dotsContainer.innerHTML = '';
            slides.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(index));
                dotsContainer.appendChild(dot);
            });
        }

        function updateText(index) {
            const title = slides[index].getAttribute('data-title');
            const desc = slides[index].getAttribute('data-desc');
            if (slideTitle) slideTitle.innerText = title || "";
            if (slideDesc) slideDesc.innerText = desc || "";
        }

        function goToSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            currentIndex = index;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            if(dotsContainer) {
                const dots = Array.from(dotsContainer.children);
                dots.forEach(dot => dot.classList.remove('active'));
                if(dots[currentIndex]) dots[currentIndex].classList.add('active');
            }
            updateText(currentIndex);
        }

        const newPrev = prevBtn.cloneNode(true);
        const newNext = nextBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrev, prevBtn);
        nextBtn.parentNode.replaceChild(newNext, nextBtn);
        
        newPrev.addEventListener('click', () => goToSlide(currentIndex - 1));
        newNext.addEventListener('click', () => goToSlide(currentIndex + 1));
        updateText(0);
    }, 100);
}

function initInteractions() {
    const sections = document.querySelectorAll('section, .stat-card, .project-card, .info-card, .contact-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    }, { threshold: 0.1 });
    sections.forEach(sec => {
        sec.classList.add('hidden');
        observer.observe(sec);
    });

    const cards = document.querySelectorAll('.stat-card, .project-card, .info-card, .contact-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            card.style.transition = 'transform 0.1s ease-out';
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.5s ease';
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    const subtitleElement = document.querySelector('.hero .subtitle');
    if (subtitleElement && subtitleElement.innerText.length === 0) { 
        const textToType = "Full Stack Developer by day. Competitive gamer by night.";
        let charIndex = 0;
        function typeWriter() {
            if (charIndex < textToType.length) {
                subtitleElement.innerHTML += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 30); 
            } else {
                subtitleElement.innerHTML += '<span class="cursor">&nbsp;</span>';
            }
        }
        setTimeout(typeWriter, 500);
    }
}


// ==========================================
// TACTILE DRAGGABLE STICKER PHYSICS (ABOUT SECTION)
// ==========================================
function initDraggableStickers() {
    const stickers = document.querySelectorAll('.draggable-sticker');
    if (!stickers.length) return;

    stickers.forEach((sticker) => {
        let isDragging = false;
        let startPointerX = 0;
        let startPointerY = 0;
        let currentTranslateX = 0;
        let currentTranslateY = 0;
        const baseRotation = sticker.classList.contains('sticker-y') ? -7 : 0;
        let currentRotation = baseRotation;
        let hasMoved = false;

        sticker.addEventListener('pointerdown', (e) => {
            // Only primary mouse button or touch
            if (e.button !== undefined && e.button !== 0) return;
            isDragging = true;
            hasMoved = false;
            startPointerX = e.clientX;
            startPointerY = e.clientY;
            sticker.classList.add('is-dragging');
            try {
                sticker.setPointerCapture(e.pointerId);
            } catch (err) {}
        });

        sticker.addEventListener('pointermove', (e) => {
            if (isDragging) {
                const deltaX = e.clientX - startPointerX;
                const deltaY = e.clientY - startPointerY;
                if (Math.hypot(deltaX, deltaY) > 3) hasMoved = true;

                // Subtle dynamic swing angle based on horizontal drag delta
                const tilt = Math.max(-14, Math.min(14, deltaX * 0.1));
                currentRotation = baseRotation + tilt;

                const posX = currentTranslateX + deltaX;
                const posY = currentTranslateY + deltaY;

                sticker.style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${currentRotation}deg) scale(1.05)`;
            } else {
                // Interactive 3D cursor tilt on hover
                const rect = sticker.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const tiltX = ((y - centerY) / centerY) * -6;
                const tiltY = ((x - centerX) / centerX) * 6;
                sticker.style.transform = `translate3d(${currentTranslateX}px, ${currentTranslateY}px, 0) perspective(400px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) rotate(${baseRotation}deg)`;
            }
        });

        const stopDrag = (e) => {
            if (!isDragging) return;
            isDragging = false;
            sticker.classList.remove('is-dragging');

            if (hasMoved) {
                const deltaX = e.clientX - startPointerX;
                const deltaY = e.clientY - startPointerY;
                currentTranslateX += deltaX;
                currentTranslateY += deltaY;
            }

            // Natural settling bounce
            sticker.style.transition = 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease';
            sticker.style.transform = `translate3d(${currentTranslateX}px, ${currentTranslateY}px, 0) rotate(${baseRotation}deg) scale(1)`;

            setTimeout(() => {
                sticker.style.transition = 'box-shadow 0.18s ease, transform 0.12s ease';
            }, 350);
        };

        sticker.addEventListener('pointerup', stopDrag);
        sticker.addEventListener('pointercancel', stopDrag);

        sticker.addEventListener('mouseleave', () => {
            if (!isDragging) {
                sticker.style.transform = `translate3d(${currentTranslateX}px, ${currentTranslateY}px, 0) rotate(${baseRotation}deg)`;
            }
        });

        // Double-click to snap back to original position
        sticker.addEventListener('dblclick', () => {
            currentTranslateX = 0;
            currentTranslateY = 0;
            currentRotation = baseRotation;
            sticker.style.transition = 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)';
            sticker.style.transform = `translate3d(0px, 0px, 0) rotate(${baseRotation}deg)`;
            setTimeout(() => {
                sticker.style.transition = 'box-shadow 0.18s ease, transform 0.12s ease';
            }, 450);
        });
    });

    // 3D perspective hover for Education Card
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });
}


// --- Terminal Logic ---
function initTerminal() {
    const toggleBtn = document.getElementById('terminal-toggle');
    const termWindow = document.getElementById('terminal-window'); 
    const closeBtn = document.getElementById('close-term');
    const input = document.getElementById('terminal-input');
    const body = document.getElementById('terminal-body');

    // JS Force Positioning
    const wrapper = document.querySelector('.terminal-wrapper');
    if(wrapper) {
        wrapper.style.position = 'fixed';
        wrapper.style.left = '20px'; // Enforced Left
        wrapper.style.right = 'auto'; // Clear Right
        wrapper.style.bottom = '20px';
        wrapper.style.zIndex = '10000';
    }

    if(!toggleBtn || !termWindow) return;

    toggleBtn.addEventListener('click', () => {
        termWindow.classList.toggle('hidden-term');
        if (!termWindow.classList.contains('hidden-term')) {
            setTimeout(() => input.focus(), 300);
        }
    });

    closeBtn.addEventListener('click', () => {
        termWindow.classList.add('hidden-term');
    });

    // ==========================================
    // RETRO SNAKE GAME
    // ==========================================
    let isSnakeRunning = false;
    let snakeHighScore = 0;

    function startSnakeGame() {
        if (isSnakeRunning) return;
        isSnakeRunning = true;

        addLine("--- RETRO SNAKE ---", "cmd-highlight");
        addLine("Controls: [Arrow Keys] or [W A S D] to Move. Press [Q] or [ESC] to Exit.", "term-dim");

        const canvas = document.createElement('canvas');
        canvas.className = 'term-snake-canvas';
        canvas.width = 300;
        canvas.height = 180;
        body.appendChild(canvas);

        const status = document.createElement('div');
        status.className = 'term-snake-status';
        status.innerText = `SCORE: 0  |  BEST: ${snakeHighScore}`;
        body.appendChild(status);

        body.scrollTop = body.scrollHeight;

        const ctx = canvas.getContext('2d');
        const cols = 20;
        const rows = 12;
        const cellSize = 15;

        let snake = [
            { x: 5, y: 6 },
            { x: 4, y: 6 },
            { x: 3, y: 6 }
        ];
        let dir = { x: 1, y: 0 };
        let nextDir = { x: 1, y: 0 };
        let food = { x: 14, y: 6 };
        let score = 0;
        let gameOver = false;
        let intervalId = null;

        function placeFood() {
            let attempts = 0;
            while (attempts < 100) {
                const fx = Math.floor(Math.random() * cols);
                const fy = Math.floor(Math.random() * rows);
                const onSnake = snake.some(s => s.x === fx && s.y === fy);
                if (!onSnake) {
                    food = { x: fx, y: fy };
                    return;
                }
                attempts++;
            }
        }

        function draw() {
            // Background
            ctx.fillStyle = '#08090b';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Subtle grid dots
            ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
            for (let x = cellSize; x < canvas.width; x += cellSize) {
                for (let y = cellSize; y < canvas.height; y += cellSize) {
                    ctx.fillRect(x - 0.5, y - 0.5, 1, 1);
                }
            }

            // Draw Food (Apple)
            ctx.fillStyle = '#ff3366';
            ctx.fillRect(food.x * cellSize + 2, food.y * cellSize + 2, cellSize - 4, cellSize - 4);
            ctx.strokeStyle = '#ffbe0b';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(food.x * cellSize + 2, food.y * cellSize + 2, cellSize - 4, cellSize - 4);

            // Draw Snake
            snake.forEach((seg, idx) => {
                if (idx === 0) {
                    ctx.fillStyle = '#bef264'; // Head
                } else {
                    ctx.fillStyle = '#a3e635'; // Body
                }
                ctx.fillRect(seg.x * cellSize + 1, seg.y * cellSize + 1, cellSize - 2, cellSize - 2);
                ctx.strokeStyle = '#050505';
                ctx.lineWidth = 1.5;
                ctx.strokeRect(seg.x * cellSize + 1, seg.y * cellSize + 1, cellSize - 2, cellSize - 2);

                // Eyes on head
                if (idx === 0) {
                    ctx.fillStyle = '#050505';
                    ctx.fillRect(seg.x * cellSize + 4, seg.y * cellSize + 4, 2.5, 2.5);
                    ctx.fillRect(seg.x * cellSize + cellSize - 6, seg.y * cellSize + 4, 2.5, 2.5);
                }
            });

            // Game Over overlay
            if (gameOver) {
                ctx.fillStyle = 'rgba(8, 9, 11, 0.85)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = '#ff3366';
                ctx.font = 'bold 15px "DM Mono", monospace';
                ctx.textAlign = 'center';
                ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 10);
                ctx.fillStyle = '#faf7ee';
                ctx.font = '11px "DM Mono", monospace';
                ctx.fillText(`Final Score: ${score}`, canvas.width / 2, canvas.height / 2 + 10);
                ctx.fillStyle = '#ffbe0b';
                ctx.font = '10px "DM Mono", monospace';
                ctx.fillText('[ENTER] Play Again   [Q] Quit', canvas.width / 2, canvas.height / 2 + 30);
            }
        }

        function step() {
            if (gameOver) return;

            dir = { ...nextDir };
            const head = snake[0];
            const newHead = { x: head.x + dir.x, y: head.y + dir.y };

            // Wall collision
            if (newHead.x < 0 || newHead.x >= cols || newHead.y < 0 || newHead.y >= rows) {
                gameOver = true;
                status.innerText = `CRASHED! Final Score: ${score} | [ENTER] Play Again | [Q] Exit`;
                draw();
                clearInterval(intervalId);
                return;
            }

            // Self collision
            if (snake.some(s => s.x === newHead.x && s.y === newHead.y)) {
                gameOver = true;
                status.innerText = `BIT SELF! Final Score: ${score} | [ENTER] Play Again | [Q] Exit`;
                draw();
                clearInterval(intervalId);
                return;
            }

            snake.unshift(newHead);

            // Food collision
            if (newHead.x === food.x && newHead.y === food.y) {
                score++;
                if (score > snakeHighScore) snakeHighScore = score;
                status.innerText = `SCORE: ${score}  |  BEST: ${snakeHighScore}`;
                placeFood();
            } else {
                snake.pop();
            }

            draw();
        }

        function resetGame() {
            snake = [
                { x: 5, y: 6 },
                { x: 4, y: 6 },
                { x: 3, y: 6 }
            ];
            dir = { x: 1, y: 0 };
            nextDir = { x: 1, y: 0 };
            score = 0;
            gameOver = false;
            placeFood();
            status.innerText = `SCORE: 0  |  BEST: ${snakeHighScore}`;
            clearInterval(intervalId);
            intervalId = setInterval(step, 110);
            draw();
        }

        function quitSnake() {
            clearInterval(intervalId);
            window.removeEventListener('keydown', handleKeyDown);
            isSnakeRunning = false;
            input.disabled = false;
            setTimeout(() => input.focus(), 80);
            addLine("Exited Snake. Welcome back! Type 'help' for commands.", "term-dim");
            body.scrollTop = body.scrollHeight;
        }

        function handleKeyDown(e) {
            if (e.key === 'q' || e.key === 'Q' || e.key === 'Escape') {
                e.preventDefault();
                quitSnake();
                return;
            }

            if (gameOver) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    resetGame();
                }
                return;
            }

            if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
                e.preventDefault();
                if (dir.y === 0) nextDir = { x: 0, y: -1 };
            } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
                e.preventDefault();
                if (dir.y === 0) nextDir = { x: 0, y: 1 };
            } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
                e.preventDefault();
                if (dir.x === 0) nextDir = { x: -1, y: 0 };
            } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
                e.preventDefault();
                if (dir.x === 0) nextDir = { x: 1, y: 0 };
            }
        }

        input.disabled = true;
        input.blur();
        window.addEventListener('keydown', handleKeyDown);
        resetGame();
    }

    // ==========================================
    // VIOLENT GLITCH EASTER EGG (sudo rm -rf /)
    // ==========================================
    function triggerViolentGlitch() {
        addLine("[CRITICAL] Unmounting root filesystem / ...", "term-error");
        addLine("rm: deleting /bin /usr /lib /portfolio ...", "term-error");
        body.scrollTop = body.scrollHeight;

        const overlay = document.createElement('div');
        overlay.className = 'violent-glitch-overlay';
        document.body.appendChild(overlay);
        document.documentElement.classList.add('violent-glitch-active');
        document.body.classList.add('violent-glitch-active');

        setTimeout(() => {
            document.documentElement.classList.remove('violent-glitch-active');
            document.body.classList.remove('violent-glitch-active');
            if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
            addLine("Permission denied: Nice try, you can't delete my portfolio 😉.", "term-success");
            body.scrollTop = body.scrollHeight;
            if (input) input.focus();
        }, 1500);
    }

        // ==========================================
    // ANIME CHARACTER DISPLAY (BLUELOCK, ONE PIECE, NARUTO)
    // ==========================================
    const animeCharacters = [
        {
            name: "Monkey D. Luffy",
            anime: "ONE PIECE",
            quote: "I'm gonna be King of the Pirates!",
            portrait: [
                "         _....._         ",
                "      .-'       '-.      ",
                "    .'   .-------. '.    ",
                "   /=== ( STRAW ) ===\\   ",
                "  |=====(  HAT  )=====|  ",
                "  |___________________|  ",
                "     / /||| | |||\\ \\     ",
                "    | / ___   ___ \\ |    ",
                "    | |( O ) ( O )| |    ",
                "    | \\ ---   --- / |    ",
                "    |      _   _    |    ",
                "    |     ( _|_ )   |    ",
                "    \\    |_______|   /   ",
                "     '.  \\_______/ .'    ",
                "       '._ ===== _.'     ",
                "         / === \\         "
            ]
        },
        {
            name: "Roronoa Zoro",
            anime: "ONE PIECE",
            quote: "Nothing happened.",
            portrait: [
                "       .---.---.---.     ",
                "      /  / / | \\ \\  \\    ",
                "     /  / /  |  \\ \\  \\   ",
                "    |=================|  ",
                "    |   ___     ___   |  ",
                "    |  / / \\   /   \\  |  ",
                "    | | / X | | (O) | |o ",
                "    |  \\___/   \\___/  |o ",
                "    |   ============  |o ",
                "    \\   [===SWORD===] /  ",
                "     '.  \\_______/  .'   ",
                "       '._ ====== _.'    ",
                "         /  /|\\  \\       "
            ]
        },
        {
            name: "Naruto Uzumaki",
            anime: "NARUTO",
            quote: "Dattebayo! That's my nindo!",
            portrait: [
                "      \\ \\  |||  / /      ",
                "     --\\ \\-|||-/ /--     ",
                "    .----------------.   ",
                "    |  [===(@)===]   |   ",
                "    '----------------'   ",
                "     / /| | | | |\\ \\     ",
                "    | / ___   ___ \\ |    ",
                "    | |( O ) ( O )| |    ",
                "   =| \\ ---   --- / |=   ",
                "   =|    -  _  -    |=   ",
                "   =|   =- ( ) -=   |=   ",
                "    \\    \\_____/    /    ",
                "     '.   =====   .'     ",
                "       '._     _.'       ",
                "         / === \\         "
            ]
        },
        {
            name: "Kakashi Hatake",
            anime: "NARUTO",
            quote: "In the ninja world, those who abandon friends are worse than scum.",
            portrait: [
                "        / / / / /        ",
                "       /_/_/_/_/         ",
                "     .------------.      ",
                "    /   [==@==]    \\     ",
                "   |==============|      ",
                "   |  \\\\      ___ |      ",
                "   |   \\\\    ( O )|      ",
                "   |    \\\\    --- |      ",
                "   |#################|   ",
                "   |#################|   ",
                "   | ############### |   ",
                "    \\###############/    ",
                "     '.###########.'     ",
                "       '._     _.'       ",
                "         / === \\         "
            ]
        },
        {
            name: "Yoichi Isagi",
            anime: "BLUE LOCK #11",
            quote: "I will be the one who devours this chance.",
            portrait: [
                "         || | ||         ",
                "       /\\|| | ||/\\       ",
                "      /  \\| | |/  \\      ",
                "     /  /|| | ||\\  \\     ",
                "    |  / ___   ___ \\|    ",
                "    | | [ @ ] [ @ ]||    ",
                "    | | (o o) (o o)||    ",
                "    |  \\     <     /|    ",
                "    |   \\  .---.  / |    ",
                "     \\   \\ `---' / /     ",
                "      '.  '=====' .'     ",
                "        '._     _.'      ",
                "        |BLUELOCK|       ",
                "        |  #11   |       "
            ]
        },
        {
            name: "Meguru Bachira",
            anime: "BLUE LOCK #8",
            quote: "I'll follow my monster to the end.",
            portrait: [
                "      .-------------.    ",
                "     /  ~ ~ ~ ~ ~ ~  \\   ",
                "    / ~ ~ ~ ~ ~ ~ ~ ~ \\  ",
                "   | ~ /|  | |  |\\ ~  |  ",
                "   |  / |  | |  | \\ ~ |  ",
                "   | |  ___   ___  | |   ",
                "   | | ( ^ ) ( ^ ) | |   ",
                "   | | ( O ) ( O ) | |   ",
                "   |  \\     v     /  |   ",
                "   |   \\  \\___/  /   |   ",
                "   \\    \\___q___/    /   ",
                "    '.             .'    ",
                "      '._ #08 _.'        ",
                "         | === |         "
            ]
        }
    ];

    function printAnimeCharacter() {
        const char = animeCharacters[Math.floor(Math.random() * animeCharacters.length)];
        const header = `[ ${char.anime} // ${char.name} ]`;
        const lines = char.portrait.join('\n');
        const quote = `"${char.quote}"`;

        const container = document.createElement('div');
        container.className = 'term-anime-card';

        const headerEl = document.createElement('div');
        headerEl.className = 'term-anime-header';
        headerEl.textContent = header;

        const artEl = document.createElement('pre');
        artEl.className = 'term-ascii';
        artEl.textContent = lines;

        const quoteEl = document.createElement('div');
        quoteEl.className = 'term-anime-quote';
        quoteEl.textContent = quote;

        container.appendChild(headerEl);
        container.appendChild(artEl);
        container.appendChild(quoteEl);

        body.appendChild(container);
        body.scrollTop = body.scrollHeight;
    }

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value.trim().toLowerCase();
            input.value = '';
            processCommand(cmd);
        }
    });

    function processCommand(cmd) {
        addLine(`➜ ~ ${cmd}`, 'cmd-highlight');

        // Check for sudo or rm -rf commands to trigger violent glitch
        if (
            cmd === 'sudo' || 
            cmd === 'sudo rm -rf /' || 
            cmd === 'rm -rf /' || 
            cmd.startsWith('sudo ') || 
            cmd.startsWith('rm -rf')
        ) {
            triggerViolentGlitch();
            return;
        }

        const parts = cmd.split(/\s+/);
        const mainCmd = parts[0];
        const arg = parts[1] || '';

        switch(mainCmd) {
            case 'help':
                addLine("Available commands:", "term-dim");
                addLine("  about    :- Who am I?");
                addLine("  skills   :- My tech stack");
                addLine("  projects :- View my work");
                addLine("  theme    :- Toggle theme (Brutalist ↔ Hand-Drawn Sketch)");
                addLine("  snake    :- Play retro snake");
                addLine("  anime    :- Anime character display");
                addLine("  social   :- Connect with me");
                addLine("  clear    :- Clear terminal");
                addLine("  sudo     :- [RESTRICTED]");
                break;
            case 'theme': {
                const applied = togglePortfolioTheme();
                addLine(applied === 'sketch' 
                    ? "Switched theme to: Hand-Drawn Sketch Wireframe ✏️" 
                    : "Switched theme to: Classic Neo-Brutalist 🎨");
                break;
            }
            case 'snake':
                startSnakeGame();
                break;
            case 'anime':
                printAnimeCharacter();
                break;
            case 'about':
                addLine("Yash Nitin Sarode. 2nd Year CSE @ VIT Vellore.");
                addLine("I build web apps, grind DSA in Java, and play Valorant.");
                break;
            case 'skills':
                addLine("AI & Data: Python, NumPy, Pandas, Matplotlib, Scikit-Learn, Supervised ML");
                addLine("Web & 3D: HTML5, CSS3, JavaScript, React.js, Three.js, Firebase");
                addLine("DSA & Systems: Java, DSA, C / C++");
                break;
            
            case 'projects':
            case 'project': 
                addLine("redirecting to projects...");
                setTimeout(() => window.location.assign("projects.html"), 1000);
                break;
            case 'social':
                addLine("GitHub: github.com/YashSarode1224");
                addLine("LinkedIn: linkedin.com/in/yashnsarode");
                break;
            case 'clear':
                body.innerHTML = '';
                break;
            default:
                addLine(`Command not found: ${cmd}. Type 'help' for available commands.`, "term-error");
        }
        
        body.scrollTop = body.scrollHeight;
    }

    function addLine(text, className = '') {
        const div = document.createElement('div');
        div.className = `term-line ${className}`;
        div.innerText = text;
        body.appendChild(div);
    }
}

// ==========================================
// THEME ENGINE: BRUTALIST ↔ HAND-DRAWN SKETCH WIREFRAME
// ==========================================
function getActivePortfolioTheme() {
    return localStorage.getItem('yash_portfolio_theme') || 'brutalist';
}

function applyPortfolioTheme(theme) {
    const isSketch = theme === 'sketch';
    if (isSketch) {
        document.documentElement.setAttribute('data-theme', 'sketch');
        localStorage.setItem('yash_portfolio_theme', 'sketch');
        document.body.classList.add('pen-cursor-active');
        if (typeof window.triggerWelcomeDoodle === 'function') {
            window.triggerWelcomeDoodle();
        }
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('yash_portfolio_theme', 'brutalist');
        document.body.classList.remove('pen-cursor-active');
    }

    document.querySelectorAll('.theme-toggle-label').forEach(el => {
        el.textContent = isSketch ? 'Brutalist Mode' : 'Sketch Mode';
    });
    document.querySelectorAll('.theme-toggle-icon').forEach(el => {
        el.textContent = isSketch ? '🎨' : '✏️';
    });

    return isSketch ? 'sketch' : 'brutalist';
}

function togglePortfolioTheme() {
    const current = getActivePortfolioTheme();
    const nextTheme = current === 'sketch' ? 'brutalist' : 'sketch';
    return applyPortfolioTheme(nextTheme);
}

function initThemeSwitcher() {
    // 1. Sync button labels with currently active theme
    applyPortfolioTheme(getActivePortfolioTheme());

    // 2. Attach click handlers to theme toggle buttons
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            togglePortfolioTheme();
        });
    });
}

// Expose globally for terminal & external calls
window.togglePortfolioTheme = togglePortfolioTheme;
window.applyPortfolioTheme = applyPortfolioTheme;
window.initThemeSwitcher = initThemeSwitcher;




