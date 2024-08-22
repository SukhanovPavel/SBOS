import React from 'react';
import Layout from "@/components/Layout/Layout";
// import TelegramChanel from "@/components/TelegramChanel/TelegramChanel";
import {NewsComponent} from "@/components/News/NewsComponent";

const News = () => {
    return (
        <Layout meta="Новости из нашего телеграм канала. Видеонаблюдение, охранные системы">
            <NewsComponent />
            {/*<TelegramChanel />*/}
        </Layout>
    );
};

export default News;