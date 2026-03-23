import { GradFlow, PRESETS } from 'gradflow';

export default function GradFlowBackground() {
  return (
    <div className="gradflow-wrapper">
      <GradFlow
        config={{
          ...PRESETS.plasma,
          type: 'stripe',
          speed: 0.12,
          scale: 2.0,
        }}
      />
    </div>
  );
}
