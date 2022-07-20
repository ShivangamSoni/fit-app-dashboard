const DashPanel = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>

            <th>
              {/* Icon */}
              <span>Steps</span>
            </th>

            <th>
              {/* Icon */}
              <span>Workout</span>
            </th>

            <th>
              {/* Icon */}
              <span>Nutrition</span>
            </th>

            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img src="" alt="User Image" />
              <span>User name</span>
              <span>User email</span>
            </td>

            <td>
              {/* ProgressBar */}
              <div>
                <span>4K</span>
                <span>target</span>
              </div>
            </td>

            <td>
              <div>
                <span>
                  {/* Icon */}
                  16 Oct
                </span>
                <span>
                  {/* Icon */}
                  22 Oct
                </span>
              </div>
              <button>{/* Arrow Icon */}&gt;</button>
            </td>

            <td>
              {/* PieChart */}
              <div>
                <span>4K</span>
                <span>target</span>
              </div>
              <button>{/* Arrow Icon */}&gt;</button>
            </td>

            <td>
              <button>{/* Bell Icon */}Bell</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashPanel;
