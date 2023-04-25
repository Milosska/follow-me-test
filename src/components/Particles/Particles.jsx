import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import { particlesConfig } from './config/ParticlesConfig';
import { StyledParticles } from './Particles.styled';

export const ParticlesBg = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // await console.log(container);
  }, []);

  return (
    <StyledParticles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
    />
  );
};
