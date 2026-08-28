import "./DashboardPreview.css";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export function DashboardPreview() {
  return (
    <Card className="dashboard">

      <div className="dashboard__header">

        <Badge>
          Labot
        </Badge>

        <Text size="sm">
          Fluxo em execução
        </Text>

      </div>

      <div className="dashboard__workflow">

        <div className="dashboard__node">

          <Heading
            as="h4"
            size="xl"
          >
            Trigger
          </Heading>

        </div>

        <div className="dashboard__line"/>

        <div className="dashboard__node">

          <Heading
            as="h4"
            size="xl"
          >
            Google Sheets
          </Heading>

        </div>

        <div className="dashboard__line"/>

        <div className="dashboard__node">

          <Heading
            as="h4"
            size="xl"
          >
            IA
          </Heading>

        </div>

        <div className="dashboard__line"/>

        <div className="dashboard__node">

          <Heading
            as="h4"
            size="xl"
          >
            WhatsApp
          </Heading>

        </div>

      </div>

    </Card>
  );
}