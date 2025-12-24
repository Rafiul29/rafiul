'use client';
import { GitHubCalendar } from 'react-github-calendar';

export function GitHubCalendarClient({ username }: { username: string }) {
  return (
    <GitHubCalendar
      username={username}
      blockSize={14.6}
      blockMargin={5}
      colorScheme="light"
      theme={{
        light: ["#afb8c2", "#60a5fa", "#1a53e6", "#1c3dff", "#1c3dff"]
      }}
    />
  );
}