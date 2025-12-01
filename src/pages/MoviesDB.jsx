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
                    <li><strong>Developed and executed a full ETL (Extract, Transform, Load) pipeline</strong> using Python, successfully gathering data on the Top 50 highest-rated movies from a professional public API (TMDB)</li>
                    <li><strong>Structured and normalized complex, nested JSON data</strong> into a clean, relational database schema (SQLite) suitable for advanced querying and long-term storage</li>
                    <li><strong>Demonstrated strong data quality control</strong> by implementing Python logic to clean the data, standardize date formats, and filter out incomplete records (e.g., movies without an identified director)</li>
                    <li><strong>Performed detailed data refinement</strong> by processing film credits to accurately isolate the unique Director and extract the Top 10 Actors for every movie in the dataset</li>
                    <li><strong>Executed advanced SQL analysis</strong> using joins, aggregations, and Common Table Expressions (CTEs) to derive meaningful business insights, such as calculating the average performance rating per director and identifying key genre trends</li>
                    <li><strong>Utilized a robust technical stack</strong> including <code>requests</code> for API interaction, <code>pandas</code> for data manipulation, and <code>sqlalchemy</code>/<code>sqlite3</code> for database management and analytical querying</li>
                </ul>
            </div>

            <div className="moviesdb-card">
                <h3>Key Insights</h3>
                <p>
                    <i className="bi bi-film"></i> The average TMDb rating has shown a steady decline since 2010,
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
