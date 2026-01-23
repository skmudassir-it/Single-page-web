import { turso, isDbConfigured } from '../lib/turso'
import { MOCK_KPI, MOCK_TRENDS, PLATFORMS } from '../features/Analytics/data/mockData'

// Helper to determine if we should use Real DB
export const useRealData = () => isDbConfigured();

export const api = {
    async getAnalytics() {
        if (!useRealData()) {
            console.log("Using Mock Data (No DB Configured)")
            return {
                kpi: MOCK_KPI,
                trends: MOCK_TRENDS
            }
        }

        try {
            // Try to fetch from DB
            // Pre-supposes a table 'analytics_daily' exists
            // If table doesn't exist, we catch error and fallback
            const result = await turso.execute("SELECT * FROM analytics_daily ORDER BY date DESC LIMIT 30");

            if (result.rows.length === 0) {
                console.warn("Table empty or missing, falling back to mock")
                throw new Error("No data")
            }

            // Normalization logic would go here
            return {
                kpi: MOCK_KPI, // Keep mock KPI for now until we have complex queries
                trends: result.rows
            }

        } catch (e) {
            console.error("DB Fetch Error:", e)
            return {
                kpi: MOCK_KPI,
                trends: MOCK_TRENDS,
                error: "Failed to fetch from Turso"
            }
        }
    },

    async checkConnection() {
        if (!useRealData()) return { connected: false, reason: "Missing Credentials" };
        try {
            await turso.execute("SELECT 1");
            return { connected: true };
        } catch (e) {
            return { connected: false, reason: e.message };
        }
    }
}
