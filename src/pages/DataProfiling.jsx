// src/pages/DataProfiling.js
import SideNav from '../components/SideNav';

const DataProfiling = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Side Navigation */}
      <SideNav />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Data Profiling Dashboard</h1>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-600">
              Welcome to the Data Profiling Dashboard. Select an option from the side navigation to view detailed metrics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProfiling;