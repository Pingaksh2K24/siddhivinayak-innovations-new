# Under Construction Popup Component

A reusable React component for displaying "under construction" messages across your application.

## Features

- 🎨 Beautiful, modern UI with animations
- 🌐 Bilingual support (Hindi/English)
- ⚙️ Highly customizable
- 📱 Responsive design
- 🎯 Easy to use hook included
- ✨ Smooth animations and transitions

## Usage

### Basic Usage

```tsx
import UnderConstructionPopup, { useUnderConstructionPopup } from '@/components/UnderConstructionPopup'

function MyComponent() {
  const { isOpen, showPopup, hidePopup } = useUnderConstructionPopup()

  return (
    <div>
      <button onClick={showPopup}>
        Show Construction Message
      </button>
      
      <UnderConstructionPopup
        isOpen={isOpen}
        onClose={hidePopup}
      />
    </div>
  )
}
```

### Advanced Usage with Custom Props

```tsx
<UnderConstructionPopup
  isOpen={isOpen}
  onClose={hidePopup}
  title="कस्टम टाइटल"
  message="यह एक कस्टम मैसेज है जो बताता है कि यह फीचर जल्द ही आएगा।"
  autoShow={true}
  autoShowDelay={3000}
/>
```

### Auto-show on Page Load

```tsx
// Component will automatically show popup after 2 seconds
<UnderConstructionPopup
  autoShow={true}
  autoShowDelay={2000}
  title="पेज लोड हो रहा है"
  message="कृपया प्रतीक्षा करें..."
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Controls popup visibility |
| `onClose` | `() => void` | `undefined` | Callback when popup is closed |
| `title` | `string` | `"पेज निर्माणाधीन है"` | Popup title |
| `message` | `string` | `"यह सेवा जल्द ही शुरू हो जाएगी..."` | Popup message |
| `autoShow` | `boolean` | `false` | Auto-show popup on mount |
| `autoShowDelay` | `number` | `2000` | Delay before auto-show (ms) |

## Hook: useUnderConstructionPopup

The included hook provides easy state management:

```tsx
const { isOpen, showPopup, hidePopup } = useUnderConstructionPopup()
```

### Hook Returns

- `isOpen`: Current popup state
- `showPopup`: Function to show popup
- `hidePopup`: Function to hide popup

## Examples

### Service Page Integration

```tsx
// In your service page
import UnderConstructionPopup, { useUnderConstructionPopup } from '@/components/UnderConstructionPopup'

export default function ServicesPage() {
  const { isOpen, showPopup, hidePopup } = useUnderConstructionPopup()

  const handleServiceClick = (serviceName: string) => {
    showPopup() // Show construction message instead of navigating
  }

  return (
    <div>
      {/* Your services grid */}
      <button onClick={() => handleServiceClick('ERP')}>
        School ERP
      </button>
      
      <UnderConstructionPopup
        isOpen={isOpen}
        onClose={hidePopup}
        title="सेवा निर्माणाधीन है"
        message="यह सेवा जल्द ही उपलब्ध होगी। अधिक जानकारी के लिए संपर्क करें।"
      />
    </div>
  )
}
```

### Form Submission

```tsx
const handleFormSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  showPopup() // Show instead of actual submission
}

<UnderConstructionPopup
  isOpen={isOpen}
  onClose={hidePopup}
  title="फॉर्म सबमिशन निर्माणाधीन है"
  message="फॉर्म सबमिशन फीचर जल्द ही उपलब्ध होगा। कृपया फोन या ईमेल से संपर्क करें।"
/>
```

## Styling

The component uses Tailwind CSS classes and includes custom animations. The design features:

- Gradient backgrounds
- Smooth transitions
- Bounce and pulse animations
- Backdrop blur effect
- Responsive design

## Accessibility

- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Screen reader friendly

## Dependencies

- React 18+
- Tailwind CSS
- Lucide React (for icons)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Touch-friendly interactions
