import React from 'react'

function BottomBar({width = "180px", height = "auto"}) {
  return (
    <div>
        <div>
            <svg
                width={width}
                height={height}
                viewBox="0 0 1569 346"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className={"mr-24 h-auto w-[180px]"}
            >
                <path
                    d="M309.229 8.77148H418.65V70.0622C454.5 14.9789 495.755 8.77148 556.148 8.77148V117.085H528.645C456.276 117.085 421.63 151.14 421.63 218.6V333.732H309.229V8.77148Z"
                    className="default-transition text-trustBlue dark:text-trustGreen"
                ></path>
                <path
                    d="M921.249 333.712H808.866V302.732C784.323 331.21 750.88 343.586 709.644 343.586C631.335 343.586 587.062 297.155 587.062 211.761V8.75073H699.445V186.415C699.445 226.62 719.175 250.132 752.637 250.132C786.1 250.132 808.847 227.212 808.847 188.249V8.75073H921.229V333.712H921.249Z"
                    className="default-transition text-trustBlue dark:text-trustGreen"
                ></path>
                <path
                    d="M948.715 233.397H1053.97C1058.77 256.909 1074.91 266.803 1113.74 266.803C1145.44 266.803 1163.97 259.392 1163.97 245.774C1163.97 235.231 1154.99 228.412 1129.32 222.854L1044.42 203.659C987.621 190.691 958.914 157.877 958.914 105.239C958.914 35.8882 1009.72 0 1108.37 0C1207.02 0 1255.44 34.9714 1263.84 109.899H1159.23C1157.45 90.112 1137.09 78.0028 1103.63 78.0028C1076.74 78.0028 1059.44 86.655 1059.44 99.6809C1059.44 110.816 1070.76 119.468 1093.53 125.083L1182.59 146.761C1241.17 160.972 1269.3 190.71 1269.3 238.974C1269.3 305.842 1211.3 345.455 1112.7 345.455C1014.11 345.455 948.887 302.748 948.887 233.397H948.772H948.715Z"
                    className="default-transition text-trustBlue dark:text-trustGreen"
                ></path>
                <path
                    d="M1568.57 109.826V8.75073H1291.17V109.883H1373.94V333.712H1485.75V109.826H1568.57Z"
                    className="default-transition text-trustBlue dark:text-trustGreen"
                ></path>
                <path
                    d="M277.954 109.826V8.75073H0.570312V109.883H83.3481V333.712H195.176V109.826H277.954Z"
                    className="default-transition text-trustBlue dark:text-trustGreen"
                ></path>
            </svg>
        </div>
    </div>
  )
}

export default BottomBar