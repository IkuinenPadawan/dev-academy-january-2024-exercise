function StationItem() {
  return (
    <li className="py-4 bg-slate-700 rounded shadow-md">
      <div className="min-w-0 gap-x-4 ml-3">
        <p className="text-sm font-medium text-slate-50">Station name</p>
        <p className="text-sm text-slate-500 truncate">City</p>
      </div>
    </li>
  );
}

export default StationItem;
