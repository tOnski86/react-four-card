import Heading from './Components/Heading';
import Card from './Components/Card';

import iconKarma from '/icon-karma.svg';
import iconCalculator from '/icon-calculator.svg';
import iconSupervisor from '/icon-supervisor.svg';
import iconTeam from '/icon-team-builder.svg';

function App() {
  return (
    <div className='my-20 mx-8 sm:flex sm:flex-col sm:justify-center sm:items-center'>
      <Heading />

      <div className='lg:grid lg:grid-cols-3 lg:grid-rows-4 lg:gap-x-8 lg:gap-y-2 lg:max-w-5xl'>
        <Card
          grid='row-start-2 row-span-2'
          borderColor='border-t-cyan'
          description='Monitors activity to identify project roadblocks'
          icon={iconSupervisor}
        >
          Supervisor
        </Card>

        <Card
          grid='row-start-1 row-span-2'
          borderColor='border-t-red'
          description='Scans our talent network to create the optimal team for your project'
          icon={iconTeam}
        >
          Team Builder
        </Card>

        <Card
          grid='row-start-3 row-span-2'
          borderColor='border-t-orange'
          description='Regularly evaluates our talent to ensure quality'
          icon={iconKarma}
        >
          Karma
        </Card>

        <Card
          grid='row-start-2 row-span-2'
          borderColor='border-t-blue'
          description='Uses data from past projects to provide better delivery estimates'
          icon={iconCalculator}
        >
          Calculator
        </Card>
      </div>
    </div>
  );
}

export default App;
