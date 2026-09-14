import { API_BASE_URL } from './api';

export interface UserInfo {
    id: string;
    name?: string;
    email?: string;
    roles?: string[];
}

// Store user info in session storage
const USER_INFO_STORAGE_KEY = 'user_info';

export const getCurrentUser = async (): Promise<UserInfo | null> => {
    try {
        // Fetch user info from the backend
        const response = await fetch(`${API_BASE_URL}/user/me`, {
            method: 'GET',
            credentials: 'include', // Important: This sends cookies with the request
            headers: {
                'Accept': 'application/json',
            }
        });

        if (!response.ok) {
            if (response.status === 401) {
                // User is not authenticated, redirect to Azure App Service login
                window.location.href = '/.auth/login/aad';
                return null;
            }
            throw new Error(`Failed to get user info: ${response.statusText}`);
        }

        const userInfo: UserInfo = await response.json();
        
        // Save user info to storage
        sessionStorage.setItem(USER_INFO_STORAGE_KEY, JSON.stringify(userInfo));
        
        return userInfo;
    } catch (error) {
        console.error('Unable to load the authenticated user:', error);
        sessionStorage.removeItem(USER_INFO_STORAGE_KEY);
        return null;
    }
};

export const clearUserInfo = (): void => {
    sessionStorage.removeItem(USER_INFO_STORAGE_KEY);
};

export const isAuthenticated = async (): Promise<boolean> => {
    const user = await getCurrentUser();
    return user !== null && !!user.id;
};

// Login and logout are handled by Azure App Service authentication.
