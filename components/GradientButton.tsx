const GradientButton = ({ category }: { category: string }) => {
    return (
        <div className="group relative w-full transition-transform duration-300 active:scale-95">
            <button className="w-full relative z-10 rounded-sm bg-gradient-to-br from-[#D25380] to-[#E08E6D] p-0.5 duration-300 group-hover:scale-105">
                <span className="block rounded-sm px-4 py-0.5 font-semibold text-slate-100 duration-300 group-hover:bg-white/20 group-hover:text-slate-50 group-active:bg-slate-950/80">
                    {category}
                </span>
            </button>
            <span className="pointer-events-none absolute -inset-0.5 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-[#D25380] to-[#E08E6D] opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50" />
        </div>
    )
}

export default GradientButton
