import OfflineIndicator from "../OfflineIndicator";

export default function OfflineIndicatorExample() {
  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-sm text-muted-foreground">Offline:</p>
        <OfflineIndicator isOffline={true} />
      </div>
      <div className="pt-12">
        <p className="mb-2 text-sm text-muted-foreground">Online (não mostra):</p>
        <OfflineIndicator isOffline={false} />
      </div>
    </div>
  );
}
