export const profile = {
  name: 'Bojja Divya',
  email: 'divyabojja9933@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bojja-divya/',
  github: 'https://github.com/bdivya-9125/Portfolio',
  resume: './Divya_Bojja_Resume.pdf',
}
export const interests = ['Embedded Systems and Microcontrollers', 'Mechatronics and Sensor Integration', 'Hardware Prototyping and PCB Design', 'VLSI and Digital Electronics', 'Software Development and Problem Solving']
export const skills: Record<string, string[]> = {
  'Embedded Systems & Mechatronics': ['Arduino', '8051 Microcontroller', 'Embedded C', 'Sensor Interfacing', 'UART', 'CAN', 'Wireless Communication'],
  'Hardware & Prototyping': ['Circuit Design', 'Prototype Assembly', 'Hardware Debugging', 'PCB Layout', 'Hardware Testing and Validation'],
  'Electronics & VLSI': ['Digital Electronics', 'Analog Electronics', 'Verilog HDL', 'VLSI Design', 'Static Timing Analysis'],
  Programming: ['C', 'C++', 'Python', 'Java', 'HTML', 'CSS', 'JavaScript'],
  Tools: ['MATLAB', 'Arduino IDE', 'Keil', 'NI Multisim', 'Cadence Virtuoso', 'Git', 'GitHub'],
}
export interface Project { title: string; tech: string[]; points: string[]; link?: string }
export const projects: Project[] = [
  { title: 'Hand Gesture Recognition Glove', tech: ['Arduino', '8051', 'Flex Sensors', 'Bluetooth', 'Embedded C'],
    points: ['Integrated flex sensors with Arduino and an 8051 microcontroller.', 'Captured and processed real-time analog sensor inputs.', 'Implemented Bluetooth communication through UART.', 'Developed threshold-based embedded decision logic.', 'Validated end-to-end hardware operation.'] },
  { title: 'Real-Time Glucose Monitoring and Embedded Medical Advisory System', tech: ['Arduino', '8051', 'UART', 'Embedded C', 'I2C LCD', 'Python'],
    points: ['Developed an embedded system for real-time sensor acquisition and classification.', 'Integrated Arduino, 8051, LCD and sensor components.', 'Implemented UART communication and rolling-average filtering.', 'Developed a Python dashboard for live telemetry.'] },
  { title: 'Comparative Study of 16-bit Adder Architectures', tech: ['Cadence Virtuoso', 'VLSI', 'GPDK 180nm'],
    points: ['Designed and simulated Ripple Carry and Weinberger Adders.', 'Analyzed propagation delay and power consumption.', 'Achieved 10–20x lower delay with the Weinberger Adder compared with Ripple Carry.'] },
]
export const experience = {
  role: 'PCB Design & Hardware Validation Intern', org: 'Suryas MiB Enterprise', dates: 'August 2025 – September 2025',
  points: ['Designed and simulated circuit board layouts using NI Multisim.', 'Performed schematic capture and component modeling.', 'Analyzed BJT, MOSFET, LED and 555-timer circuits.', 'Performed hardware debugging and prototype validation.', 'Prepared test documentation covering thermal, noise and EMI considerations.'],
}
export const patents = [
  { title: 'System and Method for Cognitive Navigation and Location Verification', no: '202641087731', date: 'Published July 2026', text: 'An AI-based navigation framework with predictive location modeling that forecasts and autonomously verifies GNSS positioning reliability and accuracy.' },
  { title: 'Optimized Standard Cell Layout Generation for VLSI', no: '202641021183', date: 'Published March 2026', text: 'An algorithmic framework for automated standard cell layout optimization with reliability-aware modeling of aging, electromigration and parasitic effects.' },
]
export const education = [
  { school: 'Vellore Institute of Technology, Chennai', degree: 'B.Tech – Electronics and Communication Engineering', meta: '2023–2027 | CGPA: 9.08/10' },
  { school: 'Narayana Junior College, Kadapa', degree: 'Intermediate', meta: '97.9%' },
  { school: 'Gurukul Vidyapeeth, Kadapa', degree: '10th Grade', meta: '10 GPA' },
]
