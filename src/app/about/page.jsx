import Head from 'next/head';
import React from 'react';

const page = () => {
    return (
        <div>
            <Head>
                <title>About Us | Your Company Name</title>
                <meta name="description" content="Learn more about our company and mission" />
            </Head>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">About Us</h1>
                    <p className="text-xl text-gray-600">Discovering our story and mission</p>
                </section>
            </main>
        </div>
    );
};

export default page;