/* eslint-disable react/prop-types */
// src/pages/Home.js
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BarChart2, Database, Zap, ArrowRight, Play } from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 w-14 h-14 flex items-center justify-center mb-6">
      <Icon className="w-7 h-7 text-blue-600" />
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Button = ({ children, primary, className = "", onClick }) => (
  <button
    onClick={onClick}
    className={`${
      primary
        ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
        : "bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600"
    } px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 ${className}`}
  >
    {children}
  </button>
);

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-medium mb-8">
              ✨ Introducing Data Profiling Studio
            </div>
            <h1 className="text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Transform Your Data Analysis
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Get instant insights, beautiful visualizations, and actionable recommendations. 
              The most powerful data profiling tool for modern data teams.
            </p>
            <div className="flex gap-6 justify-center">
              <Link to="/data-profiling">
                <Button primary>
                  Get Started Free <ArrowRight className="w-6 h-6" />
                </Button>
              </Link>
              <Button>
                Watch Demo <Play className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-24 bg-white/50 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Everything You Need for Data Profiling
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureCard
              Icon={Database}
              title="Smart Analysis"
              description="Automatically detect patterns, anomalies, and relationships in your data with our intelligent profiling engine."
            />
            <FeatureCard
              Icon={BarChart2}
              title="Rich Visualizations"
              description="Transform complex data into clear, actionable insights with beautiful interactive charts and dashboards."
            />
            <FeatureCard
              Icon={Zap}
              title="Lightning Fast"
              description="Process millions of records in seconds with our optimized analytics engine built for scale."
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-24">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-blue-100">
              Join thousands of data teams who trust Data Profiling Studio
            </p>
            <Link to="/data-profiling">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 border-0 inline-flex">
                Start Free Trial <ArrowRight className="w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;