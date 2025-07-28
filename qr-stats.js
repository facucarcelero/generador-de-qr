// Sistema de estadísticas para códigos QR dinámicos
class QRStats {
    constructor() {
        this.statsKey = 'qr_dynamic_stats';
        this.init();
    }

    init() {
        // Verificar si hay parámetros de estadísticas en la URL
        const urlParams = new URLSearchParams(window.location.search);
        const qrId = urlParams.get('qr_id');
        const qrName = urlParams.get('qr_name');
        
        if (qrId && qrName) {
            this.recordVisit(qrId, qrName);
        }
    }

    recordVisit(qrId, qrName) {
        try {
            const stats = this.getStats();
            
            if (!stats[qrId]) {
                stats[qrId] = {
                    id: qrId,
                    name: qrName,
                    visitCount: 0,
                    firstVisit: new Date().toISOString(),
                    lastVisit: null,
                    visits: []
                };
            }
            
            const visit = {
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                referrer: document.referrer || 'Direct',
                screenSize: `${screen.width}x${screen.height}`,
                language: navigator.language
            };
            
            stats[qrId].visitCount++;
            stats[qrId].lastVisit = visit.timestamp;
            stats[qrId].visits.push(visit);
            
            // Mantener solo las últimas 100 visitas para no llenar el localStorage
            if (stats[qrId].visits.length > 100) {
                stats[qrId].visits = stats[qrId].visits.slice(-100);
            }
            
            this.saveStats(stats);
            
            console.log(`QR Visit recorded: ${qrId} - ${qrName}`);
        } catch (error) {
            console.error('Error recording QR visit:', error);
        }
    }

    getStats() {
        try {
            const stats = localStorage.getItem(this.statsKey);
            return stats ? JSON.parse(stats) : {};
        } catch (error) {
            console.error('Error getting QR stats:', error);
            return {};
        }
    }

    saveStats(stats) {
        try {
            localStorage.setItem(this.statsKey, JSON.stringify(stats));
        } catch (error) {
            console.error('Error saving QR stats:', error);
        }
    }

    getQRStats(qrId) {
        const stats = this.getStats();
        return stats[qrId] || null;
    }

    getAllStats() {
        return this.getStats();
    }

    clearStats() {
        try {
            localStorage.removeItem(this.statsKey);
        } catch (error) {
            console.error('Error clearing QR stats:', error);
        }
    }

    // Función para agregar parámetros de estadísticas a una URL
    addStatsParams(url, qrId, qrName) {
        try {
            const urlObj = new URL(url);
            urlObj.searchParams.set('qr_id', qrId);
            urlObj.searchParams.set('qr_name', encodeURIComponent(qrName));
            return urlObj.toString();
        } catch (error) {
            // Si no es una URL válida, agregar parámetros al final
            const separator = url.includes('?') ? '&' : '?';
            return `${url}${separator}qr_id=${qrId}&qr_name=${encodeURIComponent(qrName)}`;
        }
    }
}

// Inicializar el sistema de estadísticas
const qrStats = new QRStats();

// Exportar para uso global
window.QRStats = qrStats; 