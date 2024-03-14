import React from 'react';
import Layout from "@/components/Layout/Layout";
import TelegramChanel from "@/components/TelegramChanel/TelegramChanel";

const News = () => {
    return (
        <Layout meta="Новости из нашего телеграм канала. Видеонаблюдение, охранные системы">
            <TelegramChanel />
        </Layout>
    );
};

export default News;