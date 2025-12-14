interface TorchLightProps {
  position?: 'left' | 'right' | 'center';
  size?: 'sm' | 'md' | 'lg';
}

const TorchLight = ({ position = 'center', size = 'md' }: TorchLightProps) => {
  const positionClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2',
  };

  const sizeClasses = {
    sm: 'w-32 h-64',
    md: 'w-[20rem] h-[520px]',
    lg: 'w-96 h-[500px]',
  };

  return (
    <div
      className={`absolute top-0 ${positionClasses[position]} ${sizeClasses[size]} pointer-events-none`}
    >
      <div className="absolute inset-0 animate-flicker">
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, hsl(25 100% 50% / 0.4) 0%, hsl(25 90% 45% / 0.2) 30%, transparent 70%)',
          }}
        />
        <div 
          className="absolute inset-0 rounded-full blur-xl"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, hsl(30 80% 55% / 0.3) 0%, transparent 60%)',
          }}
        />
      </div>
    </div>
  );
};

export default TorchLight;
