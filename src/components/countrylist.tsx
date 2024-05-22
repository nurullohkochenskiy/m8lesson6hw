import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React from "react";

const Countrylist: React.FC = () => {
  const router = useRouter();
  const { resolvedTheme } = useTheme();

  return (
    <div className="container card-grid countrylist">
      {resolvedTheme === "light" ? (
        <>
          <div onClick={() => router.push(`/infocountry/`)} className="card">
            <img
              className="image"
              src="https://flagcdn.com/w320/us.png"
              alt=""
            />
            <div className="info">
              <div className="name font-extrabold">United States</div>
              <div className="additional">
                <div>
                  Population: <span>329,484,123</span>
                </div>
                <div>
                  Region: <span>Americas</span>
                </div>
                <div>
                  Capital: <span>Washington, D.C.</span>
                </div>
              </div>
            </div>
          </div>
          <div onClick={() => router.push(`/infocountry/`)} className="card">
            <img
              className="image"
              src="https://flagcdn.com/w320/us.png"
              alt=""
            />
            <div className="info">
              <div className="name font-extrabold">United States</div>
              <div className="additional">
                <div>
                  Population: <span>329,484,123</span>
                </div>
                <div>
                  Region: <span>Americas</span>
                </div>
                <div>
                  Capital: <span>Washington, D.C.</span>
                </div>
              </div>
            </div>
          </div>
          <div onClick={() => router.push(`/infocountry/`)} className="card">
            <img
              className="image"
              src="https://flagcdn.com/w320/us.png"
              alt=""
            />
            <div className="info">
              <div className="name font-extrabold">United States</div>
              <div className="additional">
                <div>
                  Population: <span>329,484,123</span>
                </div>
                <div>
                  Region: <span>Americas</span>
                </div>
                <div>
                  Capital: <span>Washington, D.C.</span>
                </div>
              </div>
            </div>
          </div>
          <div onClick={() => router.push(`/infocountry/`)} className="card">
            <img
              className="image"
              src="https://flagcdn.com/w320/us.png"
              alt=""
            />
            <div className="info">
              <div className="name font-extrabold">United States</div>
              <div className="additional">
                <div>
                  Population: <span>329,484,123</span>
                </div>
                <div>
                  Region: <span>Americas</span>
                </div>
                <div>
                  Capital: <span>Washington, D.C.</span>
                </div>
              </div>
            </div>
          </div>
          <div onClick={() => router.push(`/infocountry/`)} className="card">
            <img
              className="image"
              src="https://flagcdn.com/w320/us.png"
              alt=""
            />
            <div className="info">
              <div className="name font-extrabold">United States</div>
              <div className="additional">
                <div>
                  Population: <span>329,484,123</span>
                </div>
                <div>
                  Region: <span>Americas</span>
                </div>
                <div>
                  Capital: <span>Washington, D.C.</span>
                </div>
              </div>
            </div>
          </div>
          
        </>
      ) : (
        <>
          <div
            onClick={() => router.push(`/infocountry/`)}
            className="card darkmode"
          >
            <img
              className="image"
              src="https://flagcdn.com/w320/us.png"
              alt=""
            />
            <div className="info">
              <div className="name font-extrabold">United States</div>
              <div className="additional">
                <div>
                  Population: <span>329,484,123</span>
                </div>
                <div>
                  Region: <span>Americas</span>
                </div>
                <div>
                  Capital: <span>Washington, D.C.</span>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => router.push(`/infocountry/`)}
            className="card darkmode"
          >
            <img
              className="image"
              src="https://flagcdn.com/w320/us.png"
              alt=""
            />
            <div className="info">
              <div className="name font-extrabold">United States</div>
              <div className="additional">
                <div>
                  Population: <span>329,484,123</span>
                </div>
                <div>
                  Region: <span>Americas</span>
                </div>
                <div>
                  Capital: <span>Washington, D.C.</span>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => router.push(`/infocountry/`)}
            className="card darkmode"
          >
            <img
              className="image"
              src="https://flagcdn.com/w320/us.png"
              alt=""
            />
            <div className="info">
              <div className="name font-extrabold">United States</div>
              <div className="additional">
                <div>
                  Population: <span>329,484,123</span>
                </div>
                <div>
                  Region: <span>Americas</span>
                </div>
                <div>
                  Capital: <span>Washington, D.C.</span>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => router.push(`/infocountry/`)}
            className="card darkmode"
          >
            <img
              className="image"
              src="https://flagcdn.com/w320/us.png"
              alt=""
            />
            <div className="info">
              <div className="name font-extrabold">United States</div>
              <div className="additional">
                <div>
                  Population: <span>329,484,123</span>
                </div>
                <div>
                  Region: <span>Americas</span>
                </div>
                <div>
                  Capital: <span>Washington, D.C.</span>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => router.push(`/infocountry/`)}
            className="card darkmode"
          >
            <img
              className="image"
              src="https://flagcdn.com/w320/us.png"
              alt=""
            />
            <div className="info">
              <div className="name font-extrabold">United States</div>
              <div className="additional">
                <div>
                  Population: <span>329,484,123</span>
                </div>
                <div>
                  Region: <span>Americas</span>
                </div>
                <div>
                  Capital: <span>Washington, D.C.</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Countrylist;
