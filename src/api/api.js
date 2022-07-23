import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: { 'API-KEY': 'bb8a9a1e-fa64-4b01-a7f2-a45254559879' },
});

export const usersAPI = {
	getUsers(maxUsers, activePage) {
		return instance.get(`users?count=${maxUsers}&page=${activePage}`);
	},
};
export const followAPI = {
	deleteFollow(id) {
		return instance.delete(`follow/${id}`);
	},
	postFollow(id) {
		return instance.post(`follow/${id}`);
	},
};
export const profileAPI = {
	getProfileUser(userId) {
		return instance.get(`profile/${userId}`);
	},
};
export const authAPI = {
	getAuthMe() {
		return instance.get(`auth/me`);
	},
};
