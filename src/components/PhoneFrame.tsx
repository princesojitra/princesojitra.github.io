import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import '../styles/PhoneFrame.css';

interface PhoneFrameProps {
  children: React.ReactNode;
  batteryLevel?: number; // 0-100
}

// Define battery interface
interface BatteryManager {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  addEventListener: (type: string, listener: EventListener) => void;
  removeEventListener: (type: string, listener: EventListener) => void;
}

// Extend Navigator interface
interface NavigatorWithBattery extends Navigator {
  getBattery: () => Promise<BatteryManager>;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ 
  children, 
  batteryLevel = 75 
}) => {
  const { isDarkMode } = useTheme();
  const [actualBatteryLevel, setActualBatteryLevel] = useState<number>(batteryLevel);
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const iconColor = isDarkMode ? "white" : "black";
  
  useEffect(() => {
    const getBatteryStatus = async () => {
      try {
        if ('getBattery' in navigator) {
          const battery = await (navigator as NavigatorWithBattery).getBattery();
          setActualBatteryLevel(Math.round(battery.level * 100));
          
          // Listen for battery level changes
          battery.addEventListener('levelchange', () => {
            setActualBatteryLevel(Math.round(battery.level * 100));
          });
        }
      } catch {
        console.log('Battery API not supported or permission denied');
      }
    };
    
    getBatteryStatus();
  }, []);
  
  return (
    <div className={`phone-frame-container ${isDarkMode ? 'dark-phone-frame' : ''}`}>
      <div className={`phone-frame ${isDarkMode ? 'dark-frame' : ''}`}>
        <div className={`phone-frame-status-bar ${isDarkMode ? 'light-status-bar' : 'dark-status-bar'}`}>
          <div className="status-bar-time">{time}</div>
          <div className="dynamic-island">
            <div className="dynamic-island-camera"></div>
            <div className="dynamic-island-sensor"></div>
          </div>
          <div className="status-bar-icons">
            <svg className="signal-icon-svg" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="7" width="3" height="5" rx="1" fill={iconColor} />
              <rect x="5" y="5" width="3" height="7" rx="1" fill={iconColor} />
              <rect x="10" y="3" width="3" height="9" rx="1" fill={iconColor} />
              <rect x="15" y="1" width="3" height="11" rx="1" fill={iconColor} />
            </svg>
            <svg className="wifi-icon-svg" width="15" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M12 3C7.95 3 4.21 4.34 1.2 6.6L3 9C5.5 7.12 8.62 6 12 6C15.38 6 18.5 7.12 21 9L22.8 6.6C19.79 4.34 16.05 3 12 3ZM12 9C9.3 9 6.81 9.89 4.8 11.4L6.6 13.8C8.1 12.67 9.97 12 12 12C14.03 12 15.9 12.67 17.4 13.8L19.2 11.4C17.19 9.89 14.7 9 12 9ZM12 15C10.35 15 8.85 15.6 7.7 16.6L12 22L16.3 16.6C15.15 15.6 13.65 15 12 15Z" 
                fill={iconColor}
              />
            </svg>
            <svg className="battery-icon-svg" width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke={iconColor} />
              <rect x="2" y="2" width={`${actualBatteryLevel / 100 * 18}`} height="8" rx="1" fill={iconColor} />
              <path d="M23 4V8C23.8047 7.66122 24.328 6.87313 24.328 6C24.328 5.12687 23.8047 4.33878 23 4Z" fill={iconColor} />
            </svg>
          </div>
        </div>
        <div className="phone-frame-content">
          {children}
        </div>
        <div className={`phone-frame-home-indicator ${isDarkMode ? 'dark-home-indicator' : ''}`}></div>
      </div>
    </div>
  );
};

export default PhoneFrame;