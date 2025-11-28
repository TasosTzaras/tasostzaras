import './MoviesDB.css';

export default function MoviesDB() {
    return (
        <div className="moviesdb-container">
            <h2 className="moviesdb-title"><i className="bi bi-film"></i> Movies’ Data Extraction</h2>
            <p className="moviesdb-description">
                This project focuses on extracting, cleaning, and analyzing movie-related data from online databases like IMDb and TMDb.
                The goal is to gain insights such as rating trends, genre popularity, and revenue patterns over the years.
            </p>

            <div className="moviesdb-card">
                <h3>Project Overview</h3>
                <ul>
                    <li>Data collected using API requests from IMDb and TMDb.</li>
                    <li>Preprocessing and transformation with Python (Pandas, NumPy).</li>
                    <li>Visualization using Matplotlib and Seaborn.</li>
                    <li>Deployed interactive dashboard for exploring movie trends.</li>
                </ul>
            </div>

            <div className="moviesdb-card">
                <h3>Key Insights</h3>
                <p>
                    <i className="bi bi-film"></i> The average IMDb rating has shown a steady decline since 2010,
                    while genres like Drama and Action dominate the top-grossing movies.
                </p>
                <p>
                    <i class="bi bi-lightbulb"></i> Data-driven predictions help identify which genres perform best in specific regions and time periods.
                </p>
            </div>

            <a
                href="https://github.com/TasosTzaras/MoviesAPI"
                className="moviesdb-btn"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Project on GitHub
            </a>
        </div>
    );
}
