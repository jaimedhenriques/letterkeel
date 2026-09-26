export default function App() {
  return (
    <div className="landing">
      <header className="page" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="serif">Letterkeel</span>
        <span className="mute">Sample week · demo only</span>
      </header>
      <section className="hero">
        <div className="hero-copy">
          <p className="mute">This copy is a sample week. It is not live mail.</p>
          <h1>
            The inbox, <em>already quiet.</em>
          </h1>
          <p>Maya Chen · Northwind Studio. Plans on later screens do not charge. Nothing here reads or sends Gmail.</p>
        </div>
        <div className="page">
          <p className="mute">Thursday · Northwind</p>
          <p className="serif" style={{ fontSize: "2rem", margin: "0.35rem 0 1rem" }}>
            Five need you
          </p>
          <ul className="stack">
            <li className="card">
              <div className="row">
                <div>
                  <p style={{ margin: 0, fontWeight: 600 }}>Priya Shah</p>
                  <p style={{ margin: "0.15rem 0 0" }}>Spring residency — Northwind × Lumen</p>
                </div>
                <p className="copper">Needs you</p>
              </div>
            </li>
            <li className="card">
              <div className="row">
                <div>
                  <p style={{ margin: 0, fontWeight: 600 }}>Kenji Mori</p>
                  <p style={{ margin: "0.15rem 0 0" }}>Residency names for Lumen</p>
                </div>
                <p className="copper">Due back</p>
              </div>
            </li>
            <li className="card">
              <div className="row">
                <div>
                  <p style={{ margin: 0, fontWeight: 600 }}>The Morning Dispatch</p>
                  <p style={{ margin: "0.15rem 0 0" }}>The quiet software index</p>
                </div>
                <p className="copper">Sweep</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
