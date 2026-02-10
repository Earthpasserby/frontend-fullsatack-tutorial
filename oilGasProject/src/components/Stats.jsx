const StatCard = ({ number, label }) => (
    <div className="text-center p-6 border-r last:border-r-0 border-white/10">
        <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{number}</div>
        <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">{label}</div>
    </div>
);

const Stats = () => {
    return (
        <div className="bg-slate py-12 border-y border-white/5 relative z-20">
            <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                <StatCard number="8+" label="Years Experience" />
                <StatCard number="532,480" label="Cummulative man hours" />
                <StatCard number="40+" label="Countries" />
                <StatCard number="98%" label="Safety Rating" />
            </div>
        </div>
    );
};

export default Stats;
