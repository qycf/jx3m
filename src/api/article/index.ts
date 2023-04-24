// 权限问题后期增加
import { get, post } from '@/utils/http';
// import { UserState } from '/@/store/modules/user/types';
// import axios from 'axios';
enum URL {
	articleList = '/article',
	article = '/article',
}

export interface Article {
	id: number;
	title: string;
	map: string;
	submap: string;
	cover: string;
	profile: string;
}

export interface ArticleData {
	data: Article[];
	pages: number;
	count: number;
}

// const getUserProfile = async () => get<UserState>({ url: URL.profile });
const articleList = async (page: number, map?: string) => get<any>({ url: URL.articleList, params: { map, page } });
const article = async (id: number) => get<any>({ url: URL.articleList + '/' + id });
export { articleList, article };
