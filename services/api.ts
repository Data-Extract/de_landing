import { useRuntimeConfig } from '#app';

// Función para obtener recursos
export const getStatus = async (endpoint: string = 'api/v1/de/portal/status') => {
    const config = useRuntimeConfig();
    const apiBaseUrl = config.public.apiBaseUrl;
    try {
        const response = await $fetch(`${apiBaseUrl}${endpoint}`);
        return response;
    } catch (error) {
        console.error('Error fetching resources:', error);
        throw error;
    }
};